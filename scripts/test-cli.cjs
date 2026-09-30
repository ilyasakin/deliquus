// Exercise the compiled executable, including exit codes and config discovery.
const assert = require('assert');
const { spawnSync } = require('child_process');
const { mkdtempSync, mkdirSync, writeFileSync, rmSync } = require('fs');
const { tmpdir } = require('os');
const { join, resolve } = require('path');

const sourcePackage = require('../package.json');
const distributionPackage = require('../dist/package.json');
assert.deepStrictEqual(distributionPackage.dependencies, sourcePackage.dependencies);
assert.deepStrictEqual(distributionPackage.bin, sourcePackage.bin);
assert.strictEqual(distributionPackage.main, sourcePackage.main);
for (const field of ['scripts', 'devDependencies', 'packageManager']) {
  assert.strictEqual(distributionPackage[field], undefined);
}

const executable = resolve(__dirname, '../dist/deliquus.js');
const directory = mkdtempSync(join(tmpdir(), 'deliquus-cli-'));
const run = (args = []) =>
  spawnSync(process.execPath, [executable, ...args], {
    cwd: directory,
    encoding: 'utf8',
    env: { ...process.env, FORCE_COLOR: '0', DEBUG: '0' },
  });
const expectStatus = (args, expected) => {
  const result = run(args);
  assert.ifError(result.error);
  assert.strictEqual(result.status, expected, result.stdout + result.stderr);
  return result;
};

try {
  expectStatus(['--help'], 0);
  assert.match(expectStatus(['--version'], 0).stdout, /0\.3\.8/);
  expectStatus([], 1);
  expectStatus(['--continueWhenFailed'], 0);
  mkdirSync(join(directory, 'src'));
  mkdirSync(join(directory, 'tests'));
  writeFileSync(
    join(directory, '.deliquusrc.json'),
    JSON.stringify({
      sources: [{ name: 'components', pattern: 'src/*.ts', for: ['tests'] }],
      targets: [{ name: 'tests', pattern: 'tests/*.test.ts' }],
    }),
  );
  writeFileSync(join(directory, 'src/button.ts'), '');
  expectStatus([], 1);
  expectStatus(['--continueWhenFailed'], 0);
  expectStatus(['-c'], 0);
  writeFileSync(join(directory, 'tests/button.test.ts'), '');
  assert.match(expectStatus([], 0).stdout, /PASS!/);
  console.log('CLI smoke checks passed');
} finally {
  rmSync(directory, { recursive: true, force: true });
}

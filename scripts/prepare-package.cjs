const { copyFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const sourcePackage = require('../package.json');

const { scripts, devDependencies, packageManager, ...distributionPackage } = sourcePackage;
writeFileSync(
  resolve(__dirname, '../dist/package.json'),
  `${JSON.stringify(distributionPackage, null, 2)}\n`,
);
for (const file of ['README.md', 'LICENSE']) {
  copyFileSync(resolve(__dirname, '..', file), resolve(__dirname, '../dist', file));
}

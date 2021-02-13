module.exports = {
  sources: [{ pattern: 'src/helpers/**/*.ts', for: ['Tests'], name: 'helpers' }],
  targets: [{ pattern: 'src/__tests__/**/*.test.ts', name: 'Tests' }],
};

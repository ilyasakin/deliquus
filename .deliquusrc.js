module.exports = {
  sources: [{ pattern: 'src/helpers/**/*.ts', for: ['tests'] }],
  targets: [{ pattern: 'src/__tests__/**/*.test.ts', name: 'tests' }],
};

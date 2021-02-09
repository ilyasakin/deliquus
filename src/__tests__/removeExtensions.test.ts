import removeExtensions from '../helpers/removeExtensions';

describe('removeExtensions', () => {
  it('removes extensions', () => {
    expect(removeExtensions(['context.test.ts', 'crash.test.ts'])).toEqual(['context', 'crash']);
  });
});

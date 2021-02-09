import removePath from '../helpers/removePath';

describe('removePath', () => {
  it('works as expected', () => {
    expect(removePath(['src/__tests__/button.tsx', 'src/__tests_/dropdown.tsx'])).toEqual([
      'button.tsx',
      'dropdown.tsx',
    ]);
  });
});

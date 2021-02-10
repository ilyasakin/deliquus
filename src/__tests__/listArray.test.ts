import listArray from '../helpers/listArray';

describe('listArray', () => {
  it('lists correctly w/o prefix', () => {
    expect(listArray(['context', 'crash'])).toEqual('\ncontext\ncrash');
  });

  it('lists correctly with prefix', () => {
    expect(listArray(['context', 'crash'], ' MISSING: ')).toEqual(
      `\n MISSING:  context\n MISSING:  crash`,
    );
  });
});

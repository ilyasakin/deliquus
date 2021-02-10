import getDistinctArrayValues from '../helpers/getDistinctArrayValues';

describe('getDistinctArrayValues', () => {
  it('returns distinct values', () => {
    expect(getDistinctArrayValues(['context', 'crash', 'debug'], ['context', 'crash'])).toEqual([
      'debug',
    ]);
  });
});

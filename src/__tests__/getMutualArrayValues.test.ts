import getMutualArrayValues from '../helpers/getMutualArrayValues';

describe('getMutualArrayValues', () => {
  it('returns mutual values', () => {
    expect(getMutualArrayValues(['context', 'crash', 'qwerty'], ['context', 'crash'])).toEqual([
      'context',
      'crash',
    ]);
  });
});

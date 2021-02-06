import areArraysEqual from '../helpers/areArraysEqual';

describe('areArraysEqual', () => {
  it('returns true for arrays with equal values', () => {
    expect(areArraysEqual([1, 2, 3], [1, 2, 3])).toBe(true);

    const random0 = Math.floor(Math.random() * Math.floor(1337));
    const random1 = Math.floor(Math.random() * Math.floor(1337));
    const random2 = Math.floor(Math.random() * Math.floor(1337));

    expect(areArraysEqual([random0, random1, random2], [random0, random1, random2])).toBe(true);
  });

  it('returns false for arrays with not equal values', () => {
    expect(areArraysEqual([1, 2, 3], ['heyoyo', 123, '311'])).toBe(false);
  });
});

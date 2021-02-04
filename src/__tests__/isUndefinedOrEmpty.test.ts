import isUndefinedOrEmpty from '../helpers/isUndefinedOrEmpty';

describe('isUndefinedOrEmpty', () => {
  it('handles correctly an undefined value', () => {
    expect(isUndefinedOrEmpty(undefined)).toBe(true);
  });

  it('handles correctly a non-empty array', () => {
    expect(isUndefinedOrEmpty(['src/components'])).toBe(false);
  });

  it('handles correctly an empty array', () => {
    expect(isUndefinedOrEmpty([])).toBe(true);
  });
});

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * SOURCE: https://stackoverflow.com/a/16436975
 */
const areArraysEqual = (a: any[], b: any[]): boolean => {
  /* eslint-enable @typescript-eslint/no-explicit-any */

  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};

export default areArraysEqual;

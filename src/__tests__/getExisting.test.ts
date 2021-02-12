import getExisting from '../helpers/getExisting';

describe('getMutualArrayValues', () => {
  it('returns mutual values', () => {
    expect(
      getExisting(
        [{ filename: 'crash', directory: 'src/helpers', extension: '.ts' }],
        [{ filename: 'crash', directory: 'src/helpers', extension: '.ts' }],
      ),
    ).toEqual([{ filename: 'crash', directory: 'src/helpers', extension: '.ts' }]);
  });
});

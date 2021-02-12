import getMissing from '../helpers/getMissing';

describe('getMutualArrayValues', () => {
  it('returns missing values', () => {
    expect(
      getMissing(
        [
          { filename: 'crash', directory: 'src/helpers', extension: '.ts' },
          { filename: 'context', directory: 'src/helpers', extension: '.ts' },
        ],
        [{ filename: 'crash', directory: 'src/helpers', extension: '.ts' }],
      ),
    ).toEqual([{ filename: 'context', directory: 'src/helpers', extension: '.ts' }]);
  });
});

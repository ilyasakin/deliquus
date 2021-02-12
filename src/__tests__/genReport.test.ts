import genReport from '../helpers/genReport';

describe('genReport', () => {
  it('returns missing and existing values correctly', () => {
    expect(
      genReport(
        [
          { filename: 'crash', directory: 'src/helpers', extension: '.ts' },
          { filename: 'context', directory: 'src/helpers', extension: '.ts' },
          { filename: 'qwerty', directory: 'src/helpers', extension: '.ts' },
        ],
        [
          { filename: 'crash', directory: 'src/helpers', extension: '.ts' },
          { filename: 'context', directory: 'src/helpers', extension: '.ts' },
        ],
      ),
    ).toEqual({
      exists: [
        { filename: 'crash', directory: 'src/helpers', extension: '.ts' },
        { filename: 'context', directory: 'src/helpers', extension: '.ts' },
      ],
      missing: [{ filename: 'qwerty', directory: 'src/helpers', extension: '.ts' }],
    });
  });
});

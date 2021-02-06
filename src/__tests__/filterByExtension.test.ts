import filterByExtension from '../helpers/filterByExtension';

describe('filterByExtension', () => {
  it('filters correctly', () => {
    expect(
      filterByExtension(
        [
          'context.test.ts',
          'uncleBobSaysHi.spec.ts',
          'somerandom.keys.dot.ts',
          '420.config.js',
          'crash.test.ts',
        ],
        'test.ts',
      ),
    ).toEqual(['context.test.ts', 'crash.test.ts']);
  });

  it('crashes when no match found', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation();
    const mockConsole = jest.spyOn(console, 'error').mockImplementation();

    filterByExtension(
      ['uncleBobSaysHi.spec.ts', 'somerandom.keys.dot.ts', '420.config.js'],
      'test.ts',
    );
    expect(mockConsole).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});

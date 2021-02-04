import crash from '../helpers/crash';

describe('crash', () => {
  it('runs process.exit(1)', () => {
    /* eslint-disable @typescript-eslint/no-empty-function */
    const mockExit = jest.spyOn(process, 'exit').mockImplementation();
    const mockConsole = jest.spyOn(console, 'error').mockImplementation(() => {});
    /* eslint-enable @typescript-eslint/no-empty-function */

    crash('Crash');
    expect(mockConsole).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});

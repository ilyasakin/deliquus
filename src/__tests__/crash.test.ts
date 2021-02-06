import crash from '../helpers/crash';
import _mockConsole from '../mocks/console.mock';
import _mockExit from '../mocks/exit.mock';

describe('crash', () => {
  it('runs process.exit(1)', () => {
    const mockExit = _mockExit;
    const mockConsole = _mockConsole;

    crash('Crash');
    expect(mockConsole).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(1);
  });
});

import debug from '../helpers/debug';

describe('debug', () => {
  it('executes console.log', () => {
    const mockConsole = jest.spyOn(console, 'log').mockImplementation();
    debug('test');
    expect(mockConsole).toHaveBeenCalled();
  });
});

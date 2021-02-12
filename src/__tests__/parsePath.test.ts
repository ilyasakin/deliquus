import parsePath from '../helpers/parsePath';

describe('parsePath', () => {
  it('parses correctly', () => {
    expect(parsePath('src/__tests__/parsePath.test.ts')).toEqual({
      filename: 'parsePath',
      directory: 'src/__tests__',
      extension: '.test.ts',
    });
  });
});

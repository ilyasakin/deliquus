import genReport from '../helpers/genReport';

describe('genReport', () => {
  it('returns missing and existing values correctly', () => {
    expect(genReport(['crash', 'context', 'qwerty'], ['crash', 'context'])).toEqual({
      exists: ['crash', 'context'],
      missing: ['qwerty'],
    });
  });
});

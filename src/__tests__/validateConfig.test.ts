import validateConfig from '../helpers/validateConfig';
import errors from '../constants/Errors';

describe('validateConfig', () => {
  it('throws an error if sources field is undefined', () => {
    expect(() => validateConfig({ sources: undefined, targets: undefined })).toThrowError(
      errors.config.sources.NULL_OR_EMPTY,
    );
  });

  it('throws an error if sources field is empty', () => {
    expect(() => validateConfig({ sources: [], targets: [] })).toThrowError(
      errors.config.sources.NULL_OR_EMPTY,
    );
  });

  it('throws an error if targets field is undefined', () => {
    expect(() => validateConfig({ sources: [{}], targets: [] })).toThrowError(
      errors.config.targets.NULL_OR_EMPTY,
    );
  });

  it('throws an error if targets field is empty', () => {
    expect(() => validateConfig({ sources: [{}], targets: [] })).toThrowError(
      errors.config.targets.NULL_OR_EMPTY,
    );
  });

  it('throws an error if sources field is not array', () => {
    expect(() => validateConfig({ sources: 123, targets: 123 })).toThrowError(
      errors.config.sources.NOT_ARRAY,
    );
  });

  it('throws an error if targets field is not array', () => {
    expect(() => validateConfig({ sources: [{}], targets: 123 })).toThrowError(
      errors.config.targets.NOT_ARRAY,
    );
  });

  it("throws an error if sources' pattern is not string", () => {
    expect(() =>
      validateConfig({ sources: [{ pattern: 123 }], targets: [{ pattern: 123 }] }),
    ).toThrowError(errors.config.sources.PATTERN_NOT_STRING);
  });

  it("throws an error if sources' for field is not array", () => {
    expect(() =>
      validateConfig({ sources: [{ pattern: '123', for: 'ds' }], targets: [{ pattern: 123 }] }),
    ).toThrowError(errors.config.sources.FOR_NOT_ARRAY);
  });

  it("throws an error if sources' for values are not string", () => {
    expect(() =>
      validateConfig({ sources: [{ pattern: '123', for: [123] }], targets: [{ pattern: '123' }] }),
    ).toThrowError(errors.config.sources.FOR_VALUES_NOT_STRING);
  });

  it("throws an error if targets' pattern is not string", () => {
    expect(() =>
      validateConfig({ sources: [{ pattern: '123', for: ['asd'] }], targets: [{ pattern: 123 }] }),
    ).toThrowError(errors.config.targets.PATTERN_NOT_STRING);
  });

  it("throws an error if targets' name is not string", () => {
    expect(() =>
      validateConfig({
        sources: [{ pattern: '123', for: ['asd'] }],
        targets: [{ pattern: '123', name: {} }],
      }),
    ).toThrowError(errors.config.targets.NAME_NOT_STRING);
  });
});

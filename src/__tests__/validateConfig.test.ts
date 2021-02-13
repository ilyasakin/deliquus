import validateConfig from '../helpers/validateConfig';
import errors from '../constants/Errors';

describe('validateConfig', () => {
  it('throws an error if sources field is undefined', () => {
    // @ts-expect-error Runtime Test
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
    // @ts-expect-error Runtime Test
    expect(() => validateConfig({ sources: [{}], targets: [] })).toThrowError(
      errors.config.targets.NULL_OR_EMPTY,
    );
  });

  it('throws an error if targets field is empty', () => {
    // @ts-expect-error Runtime Test
    expect(() => validateConfig({ sources: [{}], targets: [] })).toThrowError(
      errors.config.targets.NULL_OR_EMPTY,
    );
  });

  it('throws an error if sources field is not array', () => {
    // @ts-expect-error Runtime Test
    expect(() => validateConfig({ sources: 123, targets: 123 })).toThrowError(
      errors.config.sources.NOT_ARRAY,
    );
  });

  it('throws an error if targets field is not array', () => {
    // @ts-expect-error Runtime Test
    expect(() => validateConfig({ sources: [{}], targets: 123 })).toThrowError(
      errors.config.targets.NOT_ARRAY,
    );
  });

  it("throws an error if sources' pattern is not string", () => {
    expect(() =>
      // @ts-expect-error Runtime Test
      validateConfig({ sources: [{ pattern: 123 }], targets: [{ pattern: 123 }] }),
    ).toThrowError(errors.config.sources.PATTERN_NOT_STRING);
  });

  it("throws an error if sources' for field is not array", () => {
    expect(() =>
      // @ts-expect-error Runtime Test
      validateConfig({ sources: [{ pattern: 'test', for: 'ds' }], targets: [{ pattern: 123 }] }),
    ).toThrowError(errors.config.sources.FOR_NOT_ARRAY);
  });

  it("throws an error if sources' for values are not string", () => {
    expect(() =>
      // @ts-expect-error Runtime Test
      validateConfig({ sources: [{ pattern: '123', for: [123] }], targets: [{ pattern: '123' }] }),
    ).toThrowError(errors.config.sources.FOR_VALUES_NOT_STRING);
  });

  it('throws an error if target specified in sources[..].for does not exist', () => {
    expect(() =>
      validateConfig({
        sources: [{ pattern: 'test', for: ['123', '321'] }],
        targets: [{ pattern: 'test', name: '123' }],
      }),
    ).toThrowError(errors.config.sources.TARGET_DOES_NOT_EXIST);
  });

  it("throws an error if targets' pattern is not string", () => {
    expect(() =>
      validateConfig({
        sources: [{ pattern: 'test', for: ['asd'] }],
        // @ts-expect-error Runtime Test
        targets: [{ pattern: 123, name: 'asd' }],
      }),
    ).toThrowError(errors.config.targets.PATTERN_NOT_STRING);
  });
});

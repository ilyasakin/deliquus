import { Config } from 'cosmiconfig/dist/types';
import isUndefinedOrEmpty from './isUndefinedOrEmpty';
import errors from '../constants/Errors';

const validateConfig = (config: Config): void => {
  if (isUndefinedOrEmpty(config.sources)) {
    throw new Error(errors.config.sources.NULL_OR_EMPTY);
  }

  if (isUndefinedOrEmpty(config.targets)) {
    throw new Error(errors.config.targets.NULL_OR_EMPTY);
  }

  if (!Array.isArray(config.sources)) {
    throw new Error(errors.config.sources.NOT_ARRAY);
  }

  if (!Array.isArray(config.targets)) {
    throw new Error(errors.config.targets.NOT_ARRAY);
  }

  config.sources.forEach((source: { pattern: string; for: string[] }) => {
    if (typeof source.pattern !== 'string') {
      throw new Error(errors.config.sources.PATTERN_NOT_STRING);
    }

    if (!Array.isArray(source.for)) {
      throw new Error(errors.config.sources.FOR_NOT_ARRAY);
    }

    source.for.forEach((value) => {
      if (typeof value !== 'string') {
        throw new Error(errors.config.sources.FOR_VALUES_NOT_STRING);
      }

      if (!config.targets.some((target) => target.name === value)) {
        throw new Error(errors.config.sources.TARGET_DOES_NOT_EXIST);
      }
    });
  });

  config.targets.forEach((target: { pattern: string; name: string[] }) => {
    if (typeof target.pattern !== 'string') {
      throw new Error(errors.config.targets.PATTERN_NOT_STRING);
    }

    if (typeof target.name !== 'string') {
      throw new Error(errors.config.targets.NAME_NOT_STRING);
    }
  });
};

export default validateConfig;

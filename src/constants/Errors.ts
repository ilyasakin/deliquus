import ErrorsType from '../types/ErrorsType';

const Errors: ErrorsType = {
  config: {
    sources: {
      NULL_OR_EMPTY: '"Sources" field is either null, undefined or empty',
      NOT_ARRAY: '"Sources" field can not be anything other than array',
      PATTERN_NOT_STRING: '"config.sources[..].pattern" can not be anything other than string"',
      FOR_NOT_ARRAY: '"config.sources[..].for" can not be anything other than array',
      FOR_VALUES_NOT_STRING:
        'Values inside "config.sources[..].for" can not be anything other than string',
      TARGET_DOES_NOT_EXIST: 'Target specified in source.for does not exist',
    },
    targets: {
      NULL_OR_EMPTY: '"Targets" field is either null, undefined or empty',
      NOT_ARRAY: '"Targets" field can not be anything other than array',
      PATTERN_NOT_STRING: '"config.targets[..].pattern" can not be anything other than string"',
      NAME_NOT_STRING: '"config.targets[..].name" can not be anything other than string"',
    },
  },
};

export default Errors;

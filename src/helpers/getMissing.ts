import ParsedPath from '../types/ParsedPath';

const getMissing = (source: ParsedPath[], target: ParsedPath[]): ParsedPath[] => {
  return source.filter((value) => !target.some((item) => item.filename === value.filename));
};

export default getMissing;

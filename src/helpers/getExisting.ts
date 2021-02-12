import ParsedPath from '../types/ParsedPath';

const getExisting = (source: ParsedPath[], target: ParsedPath[]): ParsedPath[] => {
  return source.filter((value) => target.some((item) => item.filename === value.filename));
};

export default getExisting;

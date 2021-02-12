import ParsedPath from '../types/ParsedPath';
import getExisting from './getExisting';
import getMissing from './getMissing';

const genReport = (
  source: ParsedPath[],
  target: ParsedPath[],
): { exists: ParsedPath[]; missing: ParsedPath[] } => {
  return {
    exists: getExisting(source, target),
    missing: getMissing(source, target),
  };
};

export default genReport;

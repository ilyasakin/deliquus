import getDistinctArrayValues from './getDistinctArrayValues';
import getMutualArrayValues from './getMutualArrayValues';

const genReport = (
  source: unknown[],
  target: unknown[],
): { exists: unknown[]; missing: unknown[] } => {
  return {
    exists: getMutualArrayValues(source, target),
    missing: getDistinctArrayValues(source, target),
  };
};

export default genReport;

const getDistinctArrayValues = (source: unknown[], target: unknown[]): unknown[] => {
  return source.filter((value) => !target.includes(value));
};

export default getDistinctArrayValues;

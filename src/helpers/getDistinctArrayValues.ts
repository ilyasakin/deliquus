const getDistinctArrayValues = (source: unknown[], target: unknown[]): unknown[] => {
  const set = new Set(target);
  return source.filter((value) => !set.has(value));
};

export default getDistinctArrayValues;

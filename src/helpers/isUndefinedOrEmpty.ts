const isUndefinedOrEmpty = (array: string[]): boolean => {
  if (!array || array.length === 0) return true;
  return false;
};

export default isUndefinedOrEmpty;

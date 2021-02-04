const isUndefinedOrEmpty = (array: string[] | undefined): boolean => {
  if (!array || array.length === 0) return true;
  return false;
};

export default isUndefinedOrEmpty;

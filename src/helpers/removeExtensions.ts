const removeExtensions = (target: string[], extension: string): string[] => {
  return target.map((value) => value.replace(`.${extension}`, ''));
};

export default removeExtensions;

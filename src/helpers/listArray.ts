const listArray = (array: string[], prefix?: string): string => {
  return array.map((value) => `\n${prefix ? `${prefix} ` : ''}${value}`).join('');
};

export default listArray;

const removePath = (array: string[]): string[] => {
  const regex = /([^\\/]+$)/;

  return array.map((value) => (regex.exec(value) as string[])[0]);
};

export default removePath;

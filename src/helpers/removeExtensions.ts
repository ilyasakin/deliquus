const removeExtensions = (target: string[]): string[] => {
  const regex = /[^.]*/;
  return target.map((value) => (regex.exec(value) as string[])[0]);
};

export default removeExtensions;

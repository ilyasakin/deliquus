import crash from './crash';

const filterByExtension = (target: string[], extension: string): string[] => {
  try {
    /**
     * Gets value after first dot.
     * SOURCE: https://stackoverflow.com/a/36746627
     */
    const extensionRegex = /(?<=\.).*/;

    const filteredValues = target.filter(
      (value) => (extensionRegex.exec(value) as string[])[0] === extension,
    );

    if (filteredValues.length === 0) {
      throw new Error(`There is no file with extension '${extension}'`);
    }
    return filteredValues;
  } catch (error) {
    crash(error);

    /**
     * This is for silencing the TypeScript.
     * TypeScript does not know that crash() function terminates the app.
     * So it complaints about that function doesn't return anything after throw Error.
     */
    return [];
  }
};

export default filterByExtension;

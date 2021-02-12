import ParsedPath from '../types/ParsedPath';

const parsePath = (path: string): ParsedPath => {
  const regexFilename = /([^\\/]+$)/;
  const regexRemoveExtension = /[^.]*/;
  const regexDirectory = /.*(?=\/)/;
  const regexExtension = /\..*$/;

  const filenameWithExtension = (regexFilename.exec(path) as RegExpExecArray)[0];
  const filename = (regexRemoveExtension.exec(filenameWithExtension) as RegExpExecArray)[0];
  const directory = (regexDirectory.exec(path) as RegExpExecArray)[0];
  const extension = (regexExtension.exec(filenameWithExtension) as RegExpExecArray)[0];

  return {
    filename,
    directory,
    extension,
  };
};

export default parsePath;

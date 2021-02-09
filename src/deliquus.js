import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import glob from 'glob';
import Context from './helpers/context.ts';
import crash from './helpers/crash.ts';
import isUndefinedOrEmpty from './helpers/isUndefinedOrEmpty.ts';
import removeExtensions from './helpers/removeExtensions';
import areArraysEqual from './helpers/areArraysEqual';
import debug from './helpers/debug';
import removePath from './helpers/removePath';

const main = async () => {
  let context = null;
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();
    if (!explorer) {
      throw new Error('No config found');
    }

    if (explorer.isEmpty) crash('Nothing to parse in the config');

    context = new Context(explorer);
  } catch (error) {
    crash(error);
  }

  const { sources, targets } = context.explorer.config;
  debug(c.cyan('config:'), { sources, targets });

  if (isUndefinedOrEmpty(sources)) crash('No source found');
  if (isUndefinedOrEmpty(targets)) crash('No target found');

  // const sourcesFilenames = fs.readdirSync(`${process.cwd()}/${sources[0].path}`);
  const sourcesFilenames = glob.sync(sources[0].pattern, { nodir: true });
  console.log(sourcesFilenames);
  const targetsFilenames = glob.sync(targets[0].pattern, { nodir: true });
  console.log(sourcesFilenames);

  const sourcesFilenamesWoExtensions = removeExtensions(sourcesFilenames);
  debug('Sources filenames w/o extensions:', sourcesFilenamesWoExtensions);

  const targetsFilenamesWoExtensions = removeExtensions(targetsFilenames);
  debug('Targets filenames w/o extensions:', targetsFilenamesWoExtensions);

  const sourcesWithRemovedPaths = removePath(sourcesFilenamesWoExtensions);
  debug('Sources with removed paths:', sourcesWithRemovedPaths);
  const targetsWithRemovedPaths = removePath(targetsFilenamesWoExtensions);
  debug('Targets with removed paths:', targetsWithRemovedPaths);

  if (!areArraysEqual(sourcesWithRemovedPaths, targetsWithRemovedPaths))
    crash('Some files are missing');
};

main();

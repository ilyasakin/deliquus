import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import fs from 'fs';
import Context from './helpers/context.ts';
import crash from './helpers/crash.ts';
import isUndefinedOrEmpty from './helpers/isUndefinedOrEmpty.ts';
import filterByExtension from './helpers/filterByExtension';
import removeExtensions from './helpers/removeExtensions';
import areArraysEqual from './helpers/areArraysEqual';
import debug from './helpers/debug';

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

  const sourcesFilenames = fs.readdirSync(`${process.cwd()}/${sources[0].path}`);
  const targetsFilenames = fs.readdirSync(`${process.cwd()}/${targets[0].path}`);

  const filteredSources = filterByExtension(sourcesFilenames, sources[0].extension);
  debug('Filtered Sources:', filteredSources);

  const filteredTargets = filterByExtension(targetsFilenames, targets[0].extension);
  debug('Filtered Targets:', filteredTargets);

  const sourcesFilenamesWoExtensions = removeExtensions(filteredSources, sources[0].extension);
  debug('Sources filenames w/o extensions:', sourcesFilenamesWoExtensions);

  const targetsFilenamesWoExtensions = removeExtensions(filteredTargets, targets[0].extension);
  debug('Targets filenames w/o extensions:', targetsFilenamesWoExtensions);

  if (!areArraysEqual(sourcesFilenamesWoExtensions, targetsFilenamesWoExtensions))
    crash('Some files are missing');
};

main();

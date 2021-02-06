import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import fs from 'fs';
import Context from './helpers/context.ts';
import crash from './helpers/crash.ts';
import isUndefinedOrEmpty from './helpers/isUndefinedOrEmpty.ts';
import filterByExtension from './helpers/filterByExtension';

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

  const { sources, targets, extensions } = context.explorer.config;
  console.log({ sources, targets, extensions });

  if (isUndefinedOrEmpty(sources)) crash('No source found');
  if (isUndefinedOrEmpty(targets)) crash('No target found');
  if (isUndefinedOrEmpty(extensions)) crash('No extension found');

  const targetsFilenames = fs.readdirSync(`${process.cwd()}/${targets[0]}`);

  console.log(targetsFilenames);
  console.log(filterByExtension(targetsFilenames, extensions[0]));
};

main();

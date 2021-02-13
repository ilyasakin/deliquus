import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import glob from 'glob';
import { program } from 'commander';
import Context from './helpers/context';
import crash from './helpers/crash';
import isUndefinedOrEmpty from './helpers/isUndefinedOrEmpty';
import debug from './helpers/debug';
import listArray from './helpers/listArray';
import genReport from './helpers/genReport';
import validateConfig from './helpers/validateConfig';
import parsePath from './helpers/parsePath';

program.version('0.1.0').option('-c, --continueWhenFailed', 'Returns with 0 if fails');
program.parse(process.argv);

const main = async () => {
  let context = null;
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();
    if (!explorer) {
      throw new Error('No config found');
    }

    context = new Context(explorer);
    validateConfig(context?.explorer?.config);
  } catch (error) {
    crash(error);
  }

  const { sources, targets } = context?.explorer?.config;
  debug(c.cyan('config:'), { sources, targets });

  if (isUndefinedOrEmpty(sources)) crash('No source found');
  if (isUndefinedOrEmpty(targets)) crash('No target found');

  const sourcesPaths = glob.sync(sources[0].pattern, { nodir: true });
  debug("Sources' Paths:", sourcesPaths);
  const targetsPaths = glob.sync(targets[0].pattern, { nodir: true });
  debug("Targets' Paths:", targetsPaths);

  const parsedSources = sourcesPaths.map((path) => parsePath(path));
  debug('Parsed Sources:', parsedSources);
  const parsedTargets = targetsPaths.map((path) => parsePath(path));
  debug('Parsed Targets:', parsedTargets);

  const report = genReport(parsedSources, parsedTargets);
  debug(report);

  if (report.missing.length !== 0) {
    crash(
      listArray(
        report.exists.map(
          ({ directory, filename, extension }) => `${directory}/${filename}${extension}`,
        ),
        c.bgGreen.bold.black(' EXISTS: '),
      ),
      listArray(
        report.missing.map(
          ({ directory, filename, extension }) => `${directory}/${filename}${extension}`,
        ),
        c.bgRed.whiteBright.bold(' MISSING: '),
      ),
    );
  }

  console.log(
    listArray(
      report.exists.map(
        ({ directory, filename, extension }) => `${directory}/${filename}${extension}`,
      ),
      c.bgGreen.bold.black(' EXISTS: '),
    ),
  );

  console.log(`\n${c.bgGreen.bold.black(' PASS! ')}`);
};

main();

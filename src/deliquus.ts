#!/usr/bin/env node

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
import Explorer from './types/Explorer';

program.version('0.3.0').option('-c, --continueWhenFailed', 'Returns with 0 if fails');
program.parse(process.argv);

const main = async () => {
  let context = null;
  let somethingMissing = false;

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

  const { sources, targets } = context?.explorer?.config as Explorer;
  debug(c.cyan('config:'), { sources, targets });

  if (isUndefinedOrEmpty(sources)) crash('No source found');
  if (isUndefinedOrEmpty(targets)) crash('No target found');

  sources.forEach((source) => {
    source.for.forEach((targetName) => {
      const sourcePaths = glob.sync(source.pattern, { nodir: true });
      debug('Source Paths:', sourcePaths);

      const target = targets.find((tgt) => tgt.name === targetName);
      const targetPaths = glob.sync(target?.pattern as string, { nodir: true });
      debug('Target Paths:', targetPaths);

      const parsedSource = sourcePaths.map((path) => parsePath(path));
      debug('Parsed Path:', parsedSource);

      const parsedTarget = targetPaths.map((path) => parsePath(path));
      debug('Parsed Path:', parsedTarget);

      const report = genReport(parsedSource, parsedTarget);
      debug(report);

      if (report.missing.length >= 1) {
        somethingMissing = true;
      }

      console.log(c.cyan(`\n${target?.name} for ${source.name}`));
      console.log(
        listArray(
          report.exists.map(
            ({ directory, filename, extension }) => `${directory}/${filename}${extension}`,
          ),
          c.bgGreen.bold.black(' EXISTING: '),
        ),
        listArray(
          report.missing.map(
            ({ directory, filename, extension }) => `${directory}/${filename}${extension}`,
          ),
          c.bgRed.whiteBright.bold(' MISSING: '),
        ),
      );
    });
  });

  if (somethingMissing) {
    crash(`\n${c.bgRed.whiteBright.bold(' FAILED! ')}`);
  } else {
    console.log(`\n${c.bgGreen.bold.black(' PASS! ')}`);
  }
};

main();

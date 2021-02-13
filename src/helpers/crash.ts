import c from 'chalk';
import { program } from 'commander';

const options = program.opts();

const crash = (...params: unknown[]): void => {
  console.error(c.red(...params));
  if (options.continueWhenFailed) process.exit(0);
  process.exit(1);
};

export default crash;

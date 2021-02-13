import c from 'chalk';

const debug = (...args: unknown[]): void => {
  if (process.env.DEBUG !== '1') return;
  console.log(c.bold.red('DEBUG:\n'), ...args);
};

export default debug;

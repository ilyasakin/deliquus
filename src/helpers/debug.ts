import c from 'chalk';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const debug = (...args: any[]): void => {
  /* eslint-enable @typescript-eslint/no-explicit-any */
  /* eslint-enable @typescript-eslint/explicit-module-boundary-types */

  if (process.env.DEBUG !== '1') return;
  console.log(c.bold.red('DEBUG:\n'), ...args);
};

export default debug;

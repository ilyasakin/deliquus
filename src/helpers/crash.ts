import c from 'chalk';

const crash = (...params: unknown[]): void => {
  console.error(c.red(...params));
  process.exit(1);
};

export default crash;

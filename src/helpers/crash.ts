import c from 'chalk';

const crash = (errorMsg: string): void => {
  console.error(c.red(errorMsg));
  process.exit(1);
};

export default crash;

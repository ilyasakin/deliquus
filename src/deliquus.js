import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import ctx from './helpers/context';

const main = async () => {
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();

    if (explorer.isEmpty) {
      console.log(c.red('Nothing to parse in the config'));
      process.exit(1);
    }

    ctx.explorer = explorer;
  } catch (error) {
    console.log(c.red('No config found'));
    process.exit(1);
  }

  const { paths, extensions, testExtensions, storyExtensions } = ctx.explorer.config;
  console.log({ paths, extensions, testExtensions, storyExtensions });
};

main();

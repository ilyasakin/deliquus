import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import ctx from './helpers/context';

const main = async () => {
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();

    if (explorer.isEmpty) {
      console.error(c.red('Nothing to parse in the config'));
      process.exit(1);
    }

    ctx.explorer = explorer;
  } catch (error) {
    console.error(c.red('No config found'));
    process.exit(1);
  }

  const {
    paths,
    extensions,
    checkTests,
    testExtensions,
    checkStories,
    storyExtensions,
  } = ctx.explorer.config;
  console.log({ paths, extensions, checkTests, testExtensions, checkStories, storyExtensions });

  if (!paths || paths.length === 0) {
    console.error(c.red('No path found'));
    process.exit(1);
  }

  if (!extensions || extensions.length === 0) {
    console.error(c.red('No extension found'));
    process.exit(1);
  }

  if (checkTests && (!testExtensions || testExtensions.length === 0)) {
    console.error(c.red('No test extension found'));
    process.exit(1);
  }

  if (checkStories && (!storyExtensions || storyExtensions.length === 0)) {
    console.error(c.red('No story extension found'));
    process.exit(1);
  }
};

main();

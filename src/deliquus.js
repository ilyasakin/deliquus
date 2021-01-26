import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';
import ctx from './helpers/context';
import crash from './helpers/crash';

const main = async () => {
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();

    if (explorer.isEmpty) crash('Nothing to parse in the config');

    ctx.explorer = explorer;
  } catch (error) {
    crash('No config found');
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

  if (!paths || paths.length === 0) crash('No path found');

  if (!extensions || extensions.length === 0) crash('No extension found');

  if (checkTests && (!testExtensions || testExtensions.length === 0))
    crash('No test extension found');

  if (checkStories && (!storyExtensions || storyExtensions.length === 0))
    crash('No story extension found');
};

main();

import { cosmiconfig } from 'cosmiconfig';
import c from 'chalk';

const main = async () => {
  console.log(c.cyan('Deliquus Project'));

  try {
    const explorer = await cosmiconfig('deliquus').search();

    if (explorer.isEmpty) {
      console.log(c.red('Nothing to parse in the config'));
      process.exit(1);
    }

    console.log(explorer.config);
  } catch (error) {
    console.log(c.red('No config found'));
    process.exit(1);
  }
};

main();

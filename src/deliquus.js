import { cosmiconfig } from 'cosmiconfig';

const explorer = cosmiconfig('deliquus');

explorer
  .search()
  .then((result) => {
    // result.config is the parsed configuration object.
    // result.filepath is the path to the config file that was found.
    // result.isEmpty is true if there was nothing to parse in the config file.

    if (result.isEmpty) {
      console.log('Nothing to parse in the config');
      process.exit(1);
    }

    console.log(result.config);
  })
  .catch(() => {
    console.log('No config found');
    process.exit(1);
  });

console.log('Deliquus Project');

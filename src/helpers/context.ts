import { CosmiconfigResult } from 'cosmiconfig/dist/types';

class ctx {
  explorer: CosmiconfigResult;

  constructor(explorer: CosmiconfigResult) {
    this.explorer = explorer;
  }
}

export default ctx;

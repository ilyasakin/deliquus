import Explorer from '../types/explorer';

class ctx {
  explorer: Explorer;

  constructor(explorer: Explorer) {
    this.explorer = explorer;
  }
}

export default ctx;

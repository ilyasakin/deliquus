const { rmSync } = require('fs');
const { resolve } = require('path');

rmSync(resolve(__dirname, '../dist'), { recursive: true, force: true });

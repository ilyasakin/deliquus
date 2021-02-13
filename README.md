# Deliquus

**Deliquus is a latin adjective meaning missing, wanting, lacking.**

**Deliquus aims to find missing test, story files and throw out an error. So you can use with husky and prevent developer from pushing the code before adding a test or story, or you know... anything.**

## Goal

We want deliquus to be configurable/customizable on every level possible.  
We don't want it to be a tool that only finds tests and stories.  
User should be configure Deliquus to match the files as she/he want.

## Roadmap

- Match files with single source directory and single target directory. ✔
- Match files with multiple source directories and multiple target directories. ✔
- Publish

## Usage

- Create a valid cosmiconfig file (See: [Cosmiconfig](https://github.com/davidtheclark/cosmiconfig#cosmiconfig)) that exports an object containing:
  ```javascript
  {
    sources: [{ pattern: 'GLOB_PATTERN', for: 'TARGET_NAME', name: 'SOURCE_NAME' }],
    targets: [{ pattern: 'GLOB_PATTERN', name: 'NAME' }],
  }
  ```
  - Check `deliquusrc.js` file to see a working example.
  - You can set multiple sources with multiple targets.
  - You should reference target that you want to match the source with in for array in source object.
  - You can set multiple targets in for. For example you can check if stories and tests existing for `components` source without redefining the same directory.

## Development

- Install dependencies

  ```bash
  $ yarn
  ```

- Run in development mode

  ```bash
  $ yarn dev
  ```

- Build

  ```bash
  $ yarn build
  ```

- Run built package

  ```bash
  $ yarn start
  ```

## LICENSE

MIT License

Copyright (c) 2021 ilyas akın

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

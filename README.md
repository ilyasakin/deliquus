# Deliquus

![image](https://user-images.githubusercontent.com/23039187/107879699-7721b600-6eeb-11eb-8373-d686ac6887b4.png)

**Deliquus aims to find missing test, story files and throw out an error. So you can use with husky and prevent developer from pushing the code before adding a test or story, or you know... anything.**

_Deliquus is a latin adjective meaning missing, wanting, lacking._

## Usage

- Install with `yarn add --dev deliquus` or `npm install deliquus --save-dev`
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
- Execute with `yarn deliquus` or `npm run deliquus` or bind to husky (recommended).

## Development

Use Node.js 22 or 24 LTS and Yarn 1.22.22. CI validates both Node versions.
Dependencies are locked: install with `yarn install --frozen-lockfile`.

Run `yarn typecheck`, `yarn test --runInBand`, and `yarn test:cli` before opening a PR.
The CLI smoke test builds the executable and checks configuration discovery,
missing/present target files, and failure/continue exit codes.

Publishing is limited to non-prerelease GitHub releases tagged `v<package version>`,
after the Node.js 22/24 checks pass. Pushing to `main` does not publish to npm.

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

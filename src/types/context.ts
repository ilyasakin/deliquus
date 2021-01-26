interface Context {
  explorer?: {
    paths: string[];
    extensions: string[];
    checkTests: boolean;
    testExtensions: string[];
    checkStories: boolean;
    storyExtensions: string[];
  };
}

export default Context;

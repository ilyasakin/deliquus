interface ErrorsType {
  config: {
    sources: Readonly<{ [key: string]: string }>;
    targets: Readonly<{ [key: string]: string }>;
  };
}

export default ErrorsType;

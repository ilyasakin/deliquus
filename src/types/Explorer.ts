interface Explorer {
  sources: { pattern: string; for: string[]; name: string }[];
  targets: { pattern: string; name: string }[];
}

export default Explorer;

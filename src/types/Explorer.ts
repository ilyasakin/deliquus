interface Explorer {
  sources: { pattern: string; for: string[] }[];
  targets: { pattern: string; name: string }[];
}

export default Explorer;

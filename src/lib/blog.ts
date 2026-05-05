// Helper to parse basic YAML frontmatter
export const parseMD = (content: string) => {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {} as any, content };
  const yaml = match[1];
  const body = match[2];
  const data: any = {};
  yaml.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim();
      if (key) data[key] = val.replace(/^["']|["']$/g, '');
    }
  });
  return { data, content: body };
};

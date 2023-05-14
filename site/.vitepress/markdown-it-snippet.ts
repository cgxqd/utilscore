import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default {
  validate: (params: any) => params.trim().match(/^code\s+(.*)$/),
  render(tokens: any, idx: number) {
    const token = tokens[idx];
    if (token.nesting === 1) {
      const [_, type] = token.info.trim().match(/^code\s+(.*)$/);
      const snippetPath = path.resolve(__dirname, "../snippets", type + ".js");
      const code = encodeURIComponent(fs.readFileSync(snippetPath).toString());
      return `<sandbox code="${code}" name="${type}.js"/>`;
    }
    return "";
  },
};

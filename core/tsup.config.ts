import { defineConfig } from "tsup";

export default defineConfig(() => {
  return {
    dts: true,
    clean: true,
    shims: true,
    metafile: false,
    treeshake: true,
    splitting: true,
    globalName: "utilscore",
    entry: ["src/index.ts"],
    output: {
      export: "named",
    },
    format: ["cjs", "esm", "iife"],
    target: "es5",
    env: {
      NODE_ENV: "development",
    },
    banner: {
      js: `// test2awegaweg`,
    },
  };
});

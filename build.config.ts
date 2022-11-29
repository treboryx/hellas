import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/validators/index"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});

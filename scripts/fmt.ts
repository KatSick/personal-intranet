import { $, Glob } from "bun";
import * as YAML from "yaml";

//#region biome
console.log("🚧 checking with biome");
await $`biome check --write .`;
//#endregion biome

//#region yaml
console.log("🚧 formatting yaml");
const glob = new Glob("**/*.{yml,yaml}");
const config = await Bun.file("biome.json").json();

console.log("config loaded", {
  indent: config.formatter.indentWidth,
  lineWidth: config.formatter.lineWidth,
});

for await (const file of glob.scan(".")) {
  await $`yaml valid < ${file}`;

  const content = Bun.file(file);

  const doc = YAML.parseDocument(await content.text());
  const formatted = doc.toString({
    indent: config.formatter.indentWidth,
    lineWidth: config.formatter.lineWidth,
  });

  await Bun.write(content, formatted);
}
//#endregion yaml

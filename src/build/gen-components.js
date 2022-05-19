/* eslint-disable */
const fs = require("fs");
const Path = require("path");
const fg = require("fast-glob");

const componentList = [];
const styleList = [];

const forEachComponents = path => {
  const components = fg.sync(path, { extglob: true });
  return components.forEach(componentPath => {
    const _componentPath = componentPath.split("/");
    _componentPath[0] = "@";

    const key = _componentPath[_componentPath.length - 1];
    const insertKey = key.replace(/\.[^.]*$/, "");
    const insertPath = _componentPath.join("/");
    const fileExtension = insertPath.match(/\.\w+$/)[0];

    switch (fileExtension) {
      case ".vue": {
        componentList.push(`export { default as ${insertKey} } from "${insertPath}";`);
        break;
      }
      case ".css": {
        styleList.push(`import "${insertPath}";`);
        break;
      }
      default:
        return;
    }
  });
};

const path = `src/components/**/*.(vue|css)`;
forEachComponents(path);

const template = `/** generate all export here */
${componentList.join("\n")}

/** generate Component style here */
${styleList.join("\n")}
`;

fs.writeFileSync(Path.resolve(__dirname, "../components/index.ts"), template);

// TODO Main

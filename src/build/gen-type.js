/* eslint-disable */
const fs = require("fs/promises");
const Path = require("path");
const fg = require("fast-glob");

const indexPath = Path.resolve(__dirname, "../../dist/index.d.ts");

const forEachComponents = path => {
  const components = fg.sync(path, { extglob: true });
  return components.map(componentPath => {
    const insertKey = componentPath.match("[^/]+(?!.*/)")[0].replace(/\.[^.]*$/, "");
    return `${insertKey}: typeof import("./components/index")["${insertKey}"];`;
  });
};

const genComponents = async () => {
  const path = `src/components/**/*.(vue)`;
  const template = `
declare module "vue" {
  export interface GlobalComponents {
    ${forEachComponents(path).join(`\n`)}
  }
}`;
  fs.appendFile(indexPath, template);
};

const linkEnv = async () => {
  const link = `/// <reference types="./dev" />`;
  fs.appendFile(indexPath, link);
};

const main = async () => {
  linkEnv();
  genComponents();
};

main();

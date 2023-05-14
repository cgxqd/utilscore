import * as matche from "./_/matche";
import * as convert from "./_/convert";
import * as number from "./modules/number";
import * as string from "./modules/string";
import * as array from "./modules/array";
import * as functional from "./modules/functional";
import * as object from "./modules/object";
import * as browser from "./modules/browser";
import * as url from "./modules/url";
import * as date from "./modules/date";
import * as base64 from "./_/base64";
import { Compartment } from "./_/compartment";
import { version } from "../package.json";

import "./_/polyfill";

export default {
  version,
  Compartment,
  ...string,
  ...array,
  ...number,
  ...browser,
  ...matche,
  ...convert,
  ...object,
  ...functional,
  ...url,
  ...date,
  ...base64,
};

export { Compartment } from "./_/compartment";
export * from "./_/matche";
export * from "./_/convert";
export * from "./modules/number";
export * from "./modules/string";
export * from "./modules/array";
export * from "./modules/functional";
export * from "./modules/object";
export * from "./modules/browser";
export * from "./modules/url";
export * from "./modules/date";
export * from "./_/es.map";
export * from "./_/base64";

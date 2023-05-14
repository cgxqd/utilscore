import PromisePolyfill from "promise-polyfill";
import { MapCtor } from "./es.map";

if (typeof window !== "undefined") {
  if (typeof window.Promise === "undefined") {
    Object.defineProperty(window, "Promise", {
      value: PromisePolyfill,
    });
  }
  if (typeof window.Map === "undefined") {
    Object.defineProperty(window, "Map", {
      value: MapCtor,
    });
  }
}

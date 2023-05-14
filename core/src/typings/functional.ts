import { MapInstance } from "./map";

export interface Memoizify<U extends (...args: any) => any> {
  (...args: Parameters<U>): ReturnType<U>;
  cache?: MapInstance<any, any>;
}

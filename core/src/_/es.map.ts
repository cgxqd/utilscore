import { hasIterable, isArray } from "./matche";
import { createIterator } from "./createIterator";
import { findIndex, find } from "../_/es.array";
import { MapConstructor, MapEachCb } from "../typings";
import { toArray } from "./convert";

export const MapCtor: MapConstructor = class<K, V> {
  public size = 0;
  private _entries: [K, V][] = [];
  constructor(entries?: any) {
    if (!isArray(entries) && entries) {
      throw new Error(
        `${typeof this
          ._entries} is not iterable (cannot read property Symbol(Symbol.iterator))`
      );
    }
    const _entries = toArray(entries);
    _entries.forEach(([key, value]: [K, V]) => this.set(key, value));
  }
  clear(): void {
    this._entries = [];
    this.size = 0;
  }
  delete(key: any): boolean {
    const index = findIndex(this._entries, ([k]: [K, V]) => k === key);
    if (index !== -1) {
      this.size--;
      this._entries.splice(index, 1);
      return true;
    }
    return false;
  }
  forEach(cb: MapEachCb<K, V>): any {
    if (typeof cb !== "function")
      throw new TypeError(`${cb} is not a function`);
    this._entries.forEach(([key, value]: [K, V]) => {
      cb && cb(value, key, this);
    });
  }
  get(key: any): any {
    const result = find(this._entries, ([k]: [K, V]) => k === key);
    if (result) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [key, value] = result;
      return value;
    }
  }
  has(key: any): any {
    return findIndex(this._entries, ([k]: [K, V]) => k === key) !== -1;
  }
  entries(): any {
    const iterators: any[] = [];
    this.forEach((value, key) => iterators.push([key, value]));
    return createIterator(iterators);
  }
  keys(): any {
    const iterators: any[] = [];
    this.forEach((_value, key) => iterators.push(key));
    return createIterator(iterators);
  }
  values(): any {
    const iterators: any[] = [];
    this.forEach(value => iterators.push(value));
    return createIterator(iterators);
  }
  set(key: K, value: V): any {
    if (!this.has(key)) this.size++;
    this._entries.push([key, value]);
    return this;
  }
  // static get [Symbol.species]() {
  //     return MapCtor;
  // }
};

if (hasIterable) {
  MapCtor.prototype[Symbol.iterator] = function entries() {
    return this.entries();
  };
  Object.defineProperty(MapCtor.prototype, Symbol.toStringTag, {
    value: "Map",
  });
  Object.defineProperty(MapCtor.prototype, Symbol.iterator, {
    configurable: false,
    writable: false,
    enumerable: false,
  });
}

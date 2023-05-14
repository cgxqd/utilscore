export type ExcludeField<T, K> = {
  [P in Extract<keyof T, K>]: T[P];
};

export interface MapInstance<K, V>
  extends ExcludeField<
    Map<K, V>,
    | "clear"
    | "delete"
    | "get"
    | "has"
    | "entries"
    | "keys"
    | "values"
    | "set"
    | "size"
  > {
  [Symbol.toStringTag]?: string;
  [Symbol.iterator]?(): IterableIterator<any>;
  forEach(callbackfn: MapEachCb<K, V>, thisArg?: any): void;
}

export type MapEachCb<K, V> = (
  value: V,
  key: K,
  map: MapInstance<K, V>
) => void;
export interface MapConstructor {
  new (): MapInstance<any, any>;
  new <K, V>(entries?: readonly (readonly [K, V])[] | null): MapInstance<K, V>;
  prototype: MapInstance<any, any>;
  readonly [Symbol.species]?: MapConstructor;
}

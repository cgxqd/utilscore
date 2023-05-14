export const cloneRegExp = (targe: any) => {
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
};

export const cloneSymbol = (value: any) =>
  Object(Symbol.prototype.valueOf.call(value));

export const cloneSet = (target: any, map: any, clone: any): any => {
  const ctor = new Set();
  target.forEach((value: any) => ctor.add(clone(value, map)));
  return ctor;
};

export const cloneMap = (target: any, map: any, clone: any): any => {
  const ctor = new Map();
  (target as any).forEach((value: any, key: any) =>
    ctor.set(key, clone(value, map))
  );
  return ctor;
};

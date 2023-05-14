/**
 * @param {Object} target
 * @param {...any} sources
 */
export function assign<Target extends Record<any, any>>(
  target: Target,
  ...sources: any[]
) {
  sources.forEach(source => {
    const descriptors = Object.keys(source).reduce((descriptors: any, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    if (Object.getOwnPropertySymbols) {
      Object.getOwnPropertySymbols(source).forEach(symbol => {
        const descriptor: any = Object.getOwnPropertyDescriptor(source, symbol);
        if (descriptor.enumerable) {
          descriptors[symbol] = descriptor;
        }
      });
    }

    Object.defineProperties(target, descriptors);
  });
  return target;
}

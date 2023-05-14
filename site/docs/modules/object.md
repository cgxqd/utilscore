# Object 对象

## deepClone
深度克隆

- `target` 目标对象

::: details 类型定义
``` ts
declare const deepClone: <T>(
    target: T, 
    map?: Map<any, any>
) => T | null;
```
:::
::: code deepClone


## merge
对象合并，与Object.assign不同的是，不覆盖前边已有属性的值

- `target` 目标对象
- `source` 来源对象

::: details 类型定义
```ts
declare const merge: <
    T extends Record<any, any>, 
    S extends Record<any, any>
>(
    target: T, 
    source: S
) => DeepMerge<T, S>;

```
:::
::: code merge

## get
深度获取属性值

* target 目标对象
* path 路径
* defaultValue 默认值

::: details 类型定义
``` ts
declare const get: <
    TObject extends Record<any, any>, 
    TPath extends string, 
    TDefailt
>(
    target: TObject, 
    path: TPath, 
    defaultValue?: TDefailt | undefined
) => GetFieldDeep<TObject, TPath, TDefailt>;
```
:::
::: code get


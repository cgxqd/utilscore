# URL 网址

## urlSearchParams
url 参数字符串反序列化

* `url` urlString

::: details 类型定义
``` ts
declare function urlSearchParams(url: string): Record<string, string>;
```
:::
::: code urlSearchParams

## urlSearchStringify
url 参数序列化

* `params` urlParams

::: details 类型定义
``` ts
declare const urlSearchStringify: (params: Record<string, any>) => string;
```
:::
::: code urlSearchStringify

## url
返回网址的相关信息，类似浏览器的 new URL(urlString)

- `url` urlString

::: details 类型定义
```ts
declare const url: (url: string) => URL2;
```
:::
::: code url
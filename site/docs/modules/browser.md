# browser 浏览器 web API

## blobToDataURL
file、blob 转 DateURL

* `stream` 文件或 blob

::: details 类型定义
```ts
declare const blobToDataURL: (stream: Blob | File) => Promise<any>;
```
:::
::: code blobToDataURL

## dataURLtoBlob
dataURL 转为 Blob 格式

* `dataURL` dataURL

::: details 类型定义
```ts
declare const dataURLtoBlob: (dataURL: string) => Blob;
```
:::
::: code dataURLtoBlob

## getImgToBase64
将image url 转为 base64 格式

* `url` image url

::: details 类型定义
```ts
declare const getImgToBase64: (url: string) => Promise<any>;
```
:::
::: code getImgToBase64

## downloadContent
根据内容下载文件

* `fileName` 文件名
* `content` 文件内容
* `type` 文件类型(默认：text/plain)

::: details 类型定义
```ts
declare const downloadContent: (
    fileName: string, 
    content: string, 
    type?: string
) => void;
```
:::
::: code downloadContent

## setClipboardData
将文本数据放置在剪贴板上

* value 复制内容

::: details 类型定义
```ts
declare const setClipboardData: (value: string) => void;
```
:::
::: code setClipboardData

## dynamicImport
动态引入资源

* `path` 资源地址
* `bundleId` 资源的ID
* `cb` 请求资源成功后的回调

::: details 类型定义
```ts
declare const dynamicImport: (
    path: string, 
    bundleId: string, 
    cb?: () => any
) => Promise<unknown>;
```
:::
::: code dynamicImport

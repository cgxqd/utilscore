# String 字符串

## sensitive
数据脱敏处理

* `value` 目标字符串
* `startIndex` 起始处的索引
* `endIndex` 终止处的索引
* `symbol` 替换的字符串，默认为*

::: details 类型定义
``` ts
declare const sensitive: (
    value: string, 
    startIndex: number, 
    endIndex: number, 
    symbol?: string
) => string;
```
:::
::: code sensitive

## sensitiveLeft
从位置左边开始对数据脱敏处理

* `value` 目标字符串
* `index` 索引（从左边开始）
* `symbol` 替换的字符串，默认为*

::: details 类型定义
``` ts
declare const sensitiveLeft: (
    value?: string, 
    index?: number, 
    symbol?: string
) => string;
```
:::
::: code sensitiveLeft

## sensitiveRight
从位置右边开始对数据脱敏处理

* `value` 目标字符串
* `index` 索引（从右边开始）
* `symbol` 替换的字符串，默认为*

::: details 类型定义
``` ts
declare const sensitiveRight: (
    value?: string, 
    index?: number, 
    symbol?: string
) => string;
```
:::
::: code sensitiveRight


## uuid
全局唯一标识符 UUID

* `len` 长度
* `radix` 基数(默认：62)

::: details 类型定义
``` ts
declare const uuid: (
    len?: number, 
    radix?: number,
) => string;
```
:::
::: code uuid

## guid
128位的数字标识符

::: code guid

## toThousands
将数值转化为千分位格式

* `value` 数值
* `symbol` 前缀符号

::: details 类型定义
``` ts
declare const toThousands: (
    value: string | number, 
    symbol?: string
) => string;

```
:::
::: code toThousands
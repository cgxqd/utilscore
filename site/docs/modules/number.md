# Number 数字

## randomInteger
指定范围(min <= value <= max)内的随机整数

* `min` 最小值
* `max` 最大值

::: details 类型定义
``` ts
declare const randomInteger: (
    min: number, 
    max: number
) => number;
```
:::
::: code randomInteger

## round 
将数字四舍五入到指定的小数位数

* `value` 数值
* `decimal` 精确到几位小数, 默认为 0

::: details 类型定义
```ts
declare const round: (
    value: number, 
    decimal?: number
) => number;
```
:::
::: code round

## precision
使用javascript精确执行加法、减法、乘法和除法运算

- plus 加法运算
- minus 减法运算
- times 乘法运算
- divide 除法运算

::: code precision
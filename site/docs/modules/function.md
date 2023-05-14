# Function 函数

## memoize
函数缓存器

* `func` 缓存目标函数
* `resolver` 设置标识

::: details 类型定义
``` ts
declare function memoize<U extends Memoizify<U>>(
    this: any, 
    func: U, 
    resolver?: () => void
): Memoizify<U>;

```
:::
::: code memoize

## queryVar
查找变量值

* `condition` 查询函数
* `delay` 查询轮询时间

::: details 类型定义
```ts
declare const queryVar: <Resolve>(
    condition: () => Resolve, 
    delay?: number
) => Promise<Resolve>;

```
:::
::: code queryVar

## debounce
函数防抖

* `fn` 函数
* `delay` 延迟执行毫秒数
* `immediate` 是否立即调用，默认false

```javascript
// immediate 为 true 等同于 debounceStart
window.onscroll = utilscore.debounce(function(){
    console.count('debounce = false 次数') 
},1000,false)

// immediate 为 false 等同于 debounceEnd
// window.onscroll = utilscore.debounce(function(){
//     console.count('debounce = true 次数') 
// },1000,true)
```

## throttle 
函数节流

* `fn` 函数
* `delay` 延迟执行毫秒数

::: details 类型定义
```ts
declare const throttle: (
  fn: (...args: any[]) => any, 
  delay: number) => (
    this: any, 
    ...args: any[]
) => void;
```
:::
::: code throttle
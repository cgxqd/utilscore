## array 数组方法

### `uniqueBy` 根据属性去重数组

```javascript

const arr = [
    { name: '1111', user: { name: 'aaa' } },
    { name: '1111', user: { name: 'ccc' } },
    { name: '222', user: { name: 'aaa' } },
    { name: '333', user: { name: 'ddd' } }
]

utilscore.uniqueBy(arr,'name')  
// => 
// "[
//   {"name": "1111","user": { "name": "aaa"}},
//   {"name": "222","user": { "name": "aaa"}},
//   {"name": "333","user": {"name": "ddd"}}
// ]"

utilscore.uniqueBy(arr,row=>row.user.name)
// =>
// "[
// 	{"name":"1111","user":{"name":"aaa"}},
// 	{"name":"1111","user":{"name":"ccc"}},
// 	{"name":"333","user":{"name":"ddd"}}
// ]"

```

### `unique` 普通数组去重

```javascript

const arr = [1,2,2,3,4,3,4,7]

utilscore.unique(arr) // => [1, 2, 3, 4, 7]

```

### `maxNumBy` 找出数组中该属性最大值的一列

```javascript

const arr = [{num:55},{num:541},{num:41}];

utilscore.maxNumBy(arr,'num') // => {num: 541}

```

### `minNumBy` 找出数组中该属性最小值的一列

```javascript

const arr = [{num:55},{num:541},{num:41}]

utilscore.minNumBy(arr,'num') // =>  {num: 41}

```

### `maxNum` 数组中的最大值

```javascript

const arr = [12,3,31,5,3];

utilscore.maxNum(arr) // => 31 

```

### `minNum` 数组中的最小值

```javascript

const arr = [12,3,31,5,3]

utilscore.minNum(arr) // => 3 

```

### `shuffle` 将数组打乱
```javascript

const arr = [1,2,3,4,5,6,7,8,9]

utilscore.shuffle(arr) //=> [9, 6, 5, 1, 8, 2, 3, 7, 4]

```

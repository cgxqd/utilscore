# 安装

## 环境支持
utilscore 可以在支持 IE9+ 的浏览器上运行

## 版本
utilscore 目前还处于快速开发迭代中。

## 使用包管理器

我们建议您使用包管理器（如 NPM、Yarn 或 pnpm）安装 utilscore

::: code-group

```sh [npm]
$ npm install utilscore
```

```sh [pnpm]
$ pnpm add utilscore
```

```sh [yarn]
$ yarn add utilscore
```

:::

如果您的网络环境不好，建议使用相关镜像服务 [cnpm](https://github.com/cnpm/cnpm) 或 [中国 NPM 镜像](https://registry.npmmirror.com/)。


## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 utilscore，然后就可以使用全局变量 utilscore 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 [jsDelivr](https://www.jsdelivr.com/) 举例。 你也可以使用其它的 CDN 供应商。


``` html
<head>
  <script src="//cdn.jsdelivr.net/npm/utilscore"></script>
</head>
```

## ESM 导入

``` js
import utilscore, { sensitive } from 'utilscore'
```
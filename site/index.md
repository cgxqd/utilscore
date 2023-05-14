---
layout: home

title: Home

hero:
  name: utilscore
  text: 前端业务代码工具库
  tagline: 高效率完成前端业务代码
  image:
    src: /assets/icon.svg
    alt: utilscore
  actions:
    - theme: brand
      text: 快速入门
      link: /docs/guide/installation
    - theme: alt
      text: View on GitHub
      link: https://github.com/cgxqd/utilscore

features:
  - icon: 📦
    title: "开箱即用"
    details: 仅需一个依赖即可上手开发，内涵丰富的功能，可满足日常的开发需求。
  - icon: 🚀
    title: 按需加载
    details: 支持ESM按需引入模块，消除无用代码来优化代码体积。
  - icon: 🔑 
    title: 完全类型化的API
    details: 灵活的 API 和完整的 TypeScript 类型。
---


<script setup>
import { onMounted } from 'vue'
import setReleaseTag from './setReleaseTag.ts'

onMounted(() => {
  setReleaseTag()
})
</script>

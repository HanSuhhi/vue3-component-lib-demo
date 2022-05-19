---
title: 开始
description: 开始使用atypical-ui
lang: zh-CN
---

# 开始使用

本节介绍如何下载并根据需要引入组件库，并在项目中使用他们

<!-- TODO 跳转更新目录 -->

:::warning

组件库仍处于开发状态，无法否认会有 API 改动、参数改动、返回值改动、CSS 调整等问题的存在。「本文档始终以**最新版本**为准」

:::

## 下载

<br />

进入到项目文件夹下，打开一个新的终端，输入以下命令：

:::: code-group
::: code-group-item NPM

```sh
npm install atypical-ui
```

:::
::: code-group-item PNPM

```sh
pnpm install atypical-ui
```

:::
::: code-group-item YARN

```sh
yarn add atypical-ui
```

:::
::::

## 引入

<br />

<!-- TODO 按需引入 -->

引入方式主要有三种：[CSS 引入](./#CSS引入)、[全局引入](./#全局引入)，[局部引入](./#局部引入)、<del>TODO 按需引入</del>

### CSS 引入

<br />

<!-- TODO： addlink-->

多数组件提供 `class` 样式及可供修改的 `css 变量`。你可以通过在标签中添加 `class` 来实现自己的组件。详细的 CSS 文档可以在组件详情中查看

<br />

在你的入口文件添加以下代码：

<br />

```js
import "atypical-ui/dist/style.css";
```

<br />

:::tip

<br/>
组件库多数组件及效果相互独立，且适用场景不同。如果使用组件不多，推荐只引入 CSS 文件，并在具体场景中自定义组件属性。
<br/>
<br/>

:::

### 全局引入

<br />

与多数组件库类似，Atypical UI 也提供了全局引入方式。你需要在入口文件中引入 `atypical-ui`，并进行全局注册。

```js
import { createApp } from "vue";
import App from "./App.vue";

import { createAtypical } from "atypical-ui";
import "atypical-ui/dist/style.css";

createApp(App).use(createAtypical()).mount("#app");
```

### 局部引入

<br />

如果你不希望在全局导入组件库，可以通过局部引入方式来实现相同的效果。

```vue
<script setup lang="ts">
import { CyberButton } from "atypical-ui";
</script>

<template>
  <cyber-button>
    Hello
    <template #tag>World</template>
  </cyber-button>
</template>
```

::: tip
<br />
注意，不要忘记在你的入口文件引入 css 文件，这很重要！
<br />
<br />
:::

## 享受它

<br />
接下来，开始享受这个组件库吧！

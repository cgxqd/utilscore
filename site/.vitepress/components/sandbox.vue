<template>
  <div>
    <div class="sandbox">
      <div class="sandbox-header">
        <div class="sandbox-header__title">{{ name }}</div>
        <div class="sandbox-tools">
          <span v-if="visTerminal" class="sandbox-tools__log" @click="closeLog">关闭日志</span>
          <span class="sandbox-tools__run" @click="runCode">运行代码(Ctrl+S)</span>
          <span class="sandbox-tools__copy" @click="copyCode">复制代码</span>
        </div>
      </div>
      <!-- 编辑器 -->
      <div class="sandbox-editor" ref="editorRef" :style="{ height: height + 'px' }" />
      <!-- 控制台 -->
      <div class="sandbox-ouput" ref="ouputRef" v-if="visTerminal">
        <el-scrollbar height="100%" ref="scrollbarRef">
          <Console :data="consoleRest.value" />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Console, DataAPI } from "vue-console-feed";
import swal from "sweetalert";
import Mousetrap from "mousetrap";
import utilscore, { Compartment } from "utilscore";
import "vue-console-feed/style.css";

const props = defineProps({
  name: String,
  code: {
    type: String,
    default: "",
  },
  height: {
    type: [Number, String],
    default: 200,
  }
});

// 是否显示日志
const visTerminal = ref(false);

// 代码
const code = ref(decodeURIComponent(props.code));

// 编辑器
const editorRef = ref();

// 重写console
const consoleRest = new DataAPI(false, 0);
const compartment = new Compartment({
  utilscore,
  console: consoleRest,
  setTimeout: (cb: (...args: any[]) => void, delay = 0) => {
    setTimeout(() => {
      try {
        cb();
      } catch (e) {
        console.error(e);
      }
    }, delay);
  },
});
onMounted(async () => {
  const basePath = "https://cgxqd.github.io/monaco-editor";
  const { editor, initWorkerUrl } = (await utilscore.dynamicImport(
    basePath + '/dist/index.global.js',
    "monaco"
  )) as any;
  await initWorkerUrl(basePath, ["ts"]);
  // 创建编辑器
  const Editor = editor.create(editorRef.value, {
    value: code.value,
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
  });


  // 保存(Ctrl+S)并运行代码
  Mousetrap(editorRef.value).bind("ctrl+s", (e: any) => {
    e.preventDefault();
    runCode();
  });

  // 监听代码改变
  Editor.onDidChangeModelContent(() => (code.value = Editor.getValue()));
});

function closeLog() {
  visTerminal.value = false
}

// 执行代码
async function runCode() {
  visTerminal.value = true;
  console.clear();
  consoleRest.clear();
  try {
    await compartment.evaluate(code.value);
  } catch (error) {
    consoleRest.error(error);
  }
}

// 复制代码
async function copyCode() {
  await navigator.clipboard.writeText(code.value);
  swal(
    "复制成功 🎉",
    "若要转载或引用请务必保留原文链接，并申明来源。如果你觉得本仓库不错，那就来 Github 给个 star 吧 😊",
    "success"
  );
}

</script>
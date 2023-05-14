import { h } from "vue";
import { ElBacktop, ElScrollbar } from "element-plus";
import Theme from "vitepress/theme";
import { EnhanceAppContext } from "vitepress";
import swal from "sweetalert";
import sandboxVue from "../components/sandbox.vue";

import utilscore from "utilscore";

import "element-plus/dist/index.css";
import "vitepress-doc-theme/index.css";

export default {
  extends: Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "aside-bottom": () => h(ElBacktop)
    });
  },
  enhanceApp({ app }: EnhanceAppContext) {
    app.component("Sandbox", sandboxVue);
    app.use(ElScrollbar);
    if (typeof window !== "undefined") {
      window.utilscore = utilscore;
      window.addEventListener("click", event => {
        if ((event.target as Element).className === "copy") {
          swal(
            "复制成功 🎉",
            "若要转载或引用请务必保留原文链接，并申明来源。如果你觉得本仓库不错，那就来 Github 给个 star 吧 😊",
            "success"
          );
        }
      });
    }
  },
};

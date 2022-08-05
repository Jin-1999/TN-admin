import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// custom element css
import "@/styles/element.scss";

// 引入element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// vue-router
import router from "@/routers/index";
// pinia store
import pinia from "@/store/index";
createApp(App).use(ElementPlus).use(router).use(pinia).mount("#app");

// 引入自定义指令
import directives from "./directives/index";

directives(createApp(App));

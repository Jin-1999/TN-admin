import { createApp } from "vue";
import App from "./App.vue";
// 引入element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// vue-router
import router from "@/routers/index";
// pinia store
import pinia from "@/store/index";
createApp(App).use(ElementPlus).use(router).use(pinia).mount("#app");

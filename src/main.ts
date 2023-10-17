import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import piniaPluginPersist from "pinia-plugin-persistedstate";

import "@/styles/index.scss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus);
const pinia = createPinia();
app.use(pinia);
pinia.use(piniaPluginPersist);
app.use(router);

app.mount("#app");

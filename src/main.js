import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import ProductPublish from "./components/ProductComp/ProductPublish.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", name: "Home", component: ProductPublish }],
});
// import "./assets/main.css";
import "./assets/global.css";
createApp(App).use(router).mount("#app");

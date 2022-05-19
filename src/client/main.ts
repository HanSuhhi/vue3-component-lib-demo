// development test;
// TODO: find a better way to test this
import { createApp } from "vue";
import App from "./App.vue";

import { createAtypical } from "../index";
import "@/styles/index.css";

createApp(App).use(createAtypical).mount("#app");

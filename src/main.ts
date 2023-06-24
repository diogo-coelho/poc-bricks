import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BricksLibrary from "@diogo-coelho/bricks";
import "@diogo-coelho/bricks/index.min.css";

const app = createApp(App);
app.use(BricksLibrary);
app.use(store);
app.use(router);
app.mount("#app");

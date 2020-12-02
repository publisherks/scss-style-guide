import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FontAwesomeIcon from "@/assets/all.css";

createApp(App).use(store).use(router).use(FontAwesomeIcon).mount("#app");

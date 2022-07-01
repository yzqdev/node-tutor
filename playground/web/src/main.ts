
import  { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index.js";
import axios from "axios";
import dayjs from "dayjs";
import './assets/index.css'

// axios.defaults.baseURL = 'http://code.smallcfj.club/api'
axios.defaults.baseURL = "http://localhost:3005/api";
const app = createApp(App);
app.config.globalProperties.$dayjs=dayjs
app.use(router);
app.use(store);
app.mount("#app");

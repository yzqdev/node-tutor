import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import Playground from './views/Playground.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },{
      path: "/html",
      name: "Html",
      component: Playground,
    },
  ],
});

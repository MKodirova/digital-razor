import Vue from "vue";
import VueRouter from "vue-router";
import Core from "../views/Core";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Core,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

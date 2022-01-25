import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "boxicons";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "./style/index.scss";
import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;

Vue.component(SwiperSlide);
Vue.component(Swiper);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

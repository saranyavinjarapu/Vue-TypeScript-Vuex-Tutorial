import Vue from "vue";
import App from "./App.vue";

//import the store we created in src/store
import store from "@/store/index";

Vue.config.productionTip = false;

new Vue({
  store, //added the store to application
  render: (h) => h(App),
}).$mount("#app");

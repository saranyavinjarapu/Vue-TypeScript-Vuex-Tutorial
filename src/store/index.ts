import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    helloMessage: "Hello from OS media",
  },
  modules: {},
};

export default new Vuex.Store<RootState>(store);

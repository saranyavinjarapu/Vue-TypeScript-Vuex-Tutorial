import { MutationTree } from "vuex";
import { UserState } from "./types";

export const mutations: MutationTree<UserState> = {
  SET_USERNAME(state, payload: string) {
    state.username = payload;
  },
};

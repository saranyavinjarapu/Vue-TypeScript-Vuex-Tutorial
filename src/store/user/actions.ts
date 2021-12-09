import { ActionTree } from "vuex";
import { RootState } from "../types";

import { UserState } from "./types";

export const actions: ActionTree<UserState, RootState> = {
  loadAPIResult(): Promise<Array<object>> {
    return fetch(`https://cat-fact.herokuapp.com`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        // commit("SET_CATS_FACTS", data);
        return data;
      });
  },
};

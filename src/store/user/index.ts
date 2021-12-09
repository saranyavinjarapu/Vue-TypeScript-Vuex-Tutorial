import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";

const state: UserState = {
  username: "sarwin",
  email: "sar@gmail.com",
  lastLogin: new Date(),
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations,
};

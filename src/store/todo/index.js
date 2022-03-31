import * as actions from "./actions";
import { todoState } from "./state";
import * as mutations from "./mutations";
import * as getters from "./getters";
export const todoModule = {
  namespaced: true,
  state: todoState,
  actions,
  mutations,
  getters,
};

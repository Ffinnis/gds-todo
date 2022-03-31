export const addTodo = ({ commit }, todo) => {
  commit("addTodo", todo);
};

export const completeTodo = ({ commit }, id) => {
  commit("completeTodo", id);
};

export const clearCompleteTodo = ({ commit }) => {
  commit("clearCompleteTodo");
};

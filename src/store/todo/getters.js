export const getAllNotCompleteTask = (state) => {
  return state.todoList.filter((todo) => !todo.isComplete).length;
};

export const getActiveTodos = (state) => {
  return state.todoList.filter((todo) => !todo.isComplete);
};

export const getCompleteTodos = (state) => {
  return state.todoList.filter((todo) => todo.isComplete);
};

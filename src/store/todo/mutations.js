export const addTodo = (state, todo) => {
  state.todoList.push(todo);
  localStorage.setItem("todoList", JSON.stringify(state.todoList));
};

export const completeTodo = (state, id) => {
  const todo = state.todoList.find((todo) => todo.id === id);
  todo.isComplete = true;
  localStorage.setItem("todoList", JSON.stringify(state.todoList));
};

export const clearCompleteTodo = (state) => {
  state.todoList = state.todoList.filter((todo) => !todo.isComplete);
  localStorage.setItem("todoList", JSON.stringify(state.todoList));
};

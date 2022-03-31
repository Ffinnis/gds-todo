export const todoState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
};

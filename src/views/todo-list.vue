<template>
  <div class="todo__wrapper">
    <create-todo />
    <ul class="todo-list">
      <todo-item
        v-for="todo in todoList"
        :key="todo.id"
        :title="todo.title"
        :is-complete="todo.isComplete"
        @click="completeTodo(todo.id)"
      />
    </ul>
    <div class="todo__utils">
      <todo-left-counter />
      <todo-filter-list @change="changeTodoList" />
      <clear-completed-todo />
    </div>
  </div>
</template>

<script setup>
import CreateTodo from "@/components/create-todo";
import store from "@/store/index";
import { computed, ref } from "vue";
import TodoItem from "@/components/todo-item";
import TodoLeftCounter from "@/components/todo-left-counter";
import TodoFilterList from "@/components/todo-filter-list";
import ClearCompletedTodo from "@/components/clear-completed-todo";

const getterName = ref(null);
const changeTodoList = (event) => {
  getterName.value = event;
};
const todoList = computed(
  () => store.getters[getterName.value] || store.state.todoModule.todoList
);

const completeTodo = (id) => {
  store.dispatch("todoModule/completeTodo", id);
};
</script>

<style lang="scss">
.todo__wrapper {
  max-width: 1176px;
  padding: 0 20px;
  margin: 0 auto;
}
.todo__utils {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #d7d7d7;
  border-top: none;
}
</style>

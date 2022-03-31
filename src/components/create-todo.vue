<template>
  <div class="create-todo">
    <div class="create-todo__area">
      <span @click="addTodo" class="create-todo__arrow"></span>
      <input
        placeholder="What needs to be done"
        type="text"
        class="create-todo__input"
        v-model="todoName"
        @keydown.enter="addTodo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "@/store/index";
import { v4 as uuidv4 } from "uuid";

const todoName = ref("");

const addTodo = () => {
  store.dispatch("todoModule/addTodo", {
    id: uuidv4(),
    title: todoName.value,
    isComplete: false,
  });
};
</script>

<style lang="scss" scoped>
.create-todo {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid #d7d7d7;
  &__area {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__arrow {
    border: solid #d7d7d7;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
  }
  &__input {
    color: #b4b4b4;
    font-size: 16px;
    border: none;
    outline: none;
    width: 100%;
    &::placeholder {
      font-style: italic;
      color: #d7d7d7;
    }
  }
}
</style>

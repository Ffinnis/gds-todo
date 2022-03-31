<template>
  <button v-show="isShow" @click="clearCompleteTodo" class="clear-button">
    Clear completed
  </button>
</template>

<script setup>
import store from "@/store/index";
import { computed } from "vue";

const isShow = computed(
  () => store.getters["todoModule/getCompleteTodos"].length
);

const clearCompleteTodo = () => {
  store.dispatch("todoModule/clearCompleteTodo");
};
</script>

<style lang="scss" scoped>
.clear-button {
  border: none;
  cursor: pointer;
  background: none;
  font-size: 12px;
  color: #b4b4b4;
}
</style>

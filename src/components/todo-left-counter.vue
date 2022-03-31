<template>
  <div class="todo-counter">{{ todoNotComplete }} items left</div>
</template>

<script setup>
import store from "@/store/index";
import { computed } from "vue";

const todoNotComplete = computed(
  () => store.getters["todoModule/getAllNotCompleteTask"]
);
</script>

<style lang="scss" scoped>
.todo-counter {
  color: #989898;
  font-size: 12px;
}
</style>

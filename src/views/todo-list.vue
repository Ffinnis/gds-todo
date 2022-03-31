<template>
  <div class="todo__wrapper">
    <create-todo />
  </div>
</template>

<script setup>
import CreateTodo from "@/components/create-todo";
</script>

<style lang="scss">
.todo__wrapper {
  max-width: 1176px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>

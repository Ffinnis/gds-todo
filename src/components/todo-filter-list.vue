<template>
  <div class="todo-filter">
    <todo-filter-item
      v-for="filter in filters"
      :key="filter.title"
      :title="filter.title"
      :getter="filter.getter"
      @change="$emit('change', $event)"
    />
  </div>
</template>

<script setup>
import TodoFilterItem from "@/components/todo-filter-item";

const filters = [
  {
    title: "All",
  },
  {
    title: "Active",
    getter: "getActiveTodos",
  },
  {
    title: "Complete",
    getter: "getCompleteTodos",
  },
];
</script>

<style lang="scss" scoped>
.todo-filter {
  display: flex;
  align-items: center;
  gap: 15px;
}
</style>

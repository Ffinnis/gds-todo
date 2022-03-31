<template>
  <button @click="setFilter" class="todo-filter__button">
    {{ props.title }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  title: String,
  getter: String,
});
const emits = defineEmits(["change"]);

const todoList = computed(() =>
  props.getter ? `todoModule/${props.getter}` : null
);

const setFilter = () => {
  return emits("change", todoList.value);
};
</script>

<style lang="scss" scoped>
.todo-filter__button {
  padding: 5px;
  color: #b4b4b4;
  font-size: 12px;
  border: 1px solid #d7d7d7;
  cursor: pointer;
}
</style>

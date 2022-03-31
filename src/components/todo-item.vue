<template>
  <li class="todo-item">
    <img
      class="todo-item__status"
      :src="require('@/assets/img/complete-icon.svg')"
      v-show="props.isComplete"
      alt="complete"
    />
    <h5 class="todo-item__title" :class="props.isComplete ? '--complete' : ''">
      {{ props.title }}
    </h5>
  </li>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  isComplete: Boolean,
});
</script>

<style lang="scss" scoped>
.todo-item {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 20px;
  border: 0.5px solid #d7d7d7;
  border-top: none;
  cursor: pointer;
  height: 40px;
  &__status {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  &__title {
    color: #b4b4b4;
    font-size: 18px;
    &.--complete {
      text-decoration: line-through;
    }
  }
}
</style>

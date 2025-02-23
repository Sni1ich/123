<template>
  <div class="flex gap-[10px]">
    <button
      v-for="index in totalButtons > 0 ? totalButtons : 3"
      :key="index"
      :class="['slider-button', { active: index - 1 === currentIndex }]"
      @click="goToSlide(index - 1)"
    ></button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  totalButtons: number;
  currentIndex: number;
  onSlideChange: (index: number) => void;
}>();

const goToSlide = (index: number) => {
  props.onSlideChange(index);
};
</script>

<style lang="scss" scoped>
.slider-button {
  border: 2px solid #c5b0aa;
  width: 40px;
  height: 0;
  transition: background-color 0.3s;

  &.active {
    border-color: var(--palette1-5);
  }

  &:hover {
    background-color: var(--palette1-5);
  }
}
</style>

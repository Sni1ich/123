<template>
  <div
    class="category-card"
    :class="{
      'large-card min-w-[150px] w-[150px] sm:w-[210px] md:w-[229px] lg:w-[470px] xl:w-[594px] xl:h-[830px]':
        props.theme === 'brown',
      'small-card min-w-[150px] w-[150px] sm:w-[210px] md:h-[820px] md:w-[470px] lg:w-[479px] xl:w-[594px]':
        props.theme === 'gray',
      'border-t border-l border-r border-palette1-5': props.theme === 'gray',
    }"
  >
    <h5
      class="category-title font-medium h-[70px] flex items-center justify-center"
      :class="{
        'bg-palette1-5': props.theme === 'brown',
        'bg-palette2-4': props.theme === 'gray',
        'text-palette1-1': props.theme === 'brown',
        'text-black': props.theme === 'gray',
      }"
    >
      {{ props.title }}
    </h5>
    <img :src="props.imageSrc" alt="Category Image" class="category-image" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  imageSrc: string;
  theme?: "gray" | "brown";
}>();
</script>

<style lang="scss" scoped>
.category-card {
  overflow: hidden;
  text-align: center;
}

.category-image {
  width: 100%;
  height: 100%;
}

.large-card {
  img {
    object-fit: cover;
  }
}

.small-card {
  height: 400px;

  img {
    object-fit: cover;
  }
}
</style>

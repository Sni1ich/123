<template>
  <div class="flavor-card relative w-[282px] flex flex-col z-10">
    <div class="image-container relative group flex-shrink-0 aspect-[4/3]">
      <img
        :src="props.imageSrc"
        alt="Flavor Image"
        class="flavor-image w-full h-full object-cover"
      />

      <button
        class="favorite-btn absolute top-4 right-4 z-10 flex items-center justify-center"
      >
        <img
          src="/src/assets/cart_icn.svg"
          alt="Favorite"
          class="w-[40px] h-[40px] object-cover xl:hidden block"
        />
        <img
          @click="toggleFavorite"
          v-if="isFavorite"
          src="/src/assets/Heart_filled.svg"
          alt="Favorite"
          class="w-[40px] h-[40px] object-cover"
        />
        <img
          v-else
          @click="toggleFavorite"
          src="/src/assets/Heart.svg"
          alt="Not Favorite"
          class="w-[40px] h-[40px]"
        />
      </button>
      <div
        class="add-to-bag-overlay absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"
      >
        <Button>Add to bag</Button>
      </div>
    </div>
    <div
      class="product-info flex-grow flex flex-col justify-center text-center bg-[#fff]"
    >
      <h3 class="font-medium">{{ props.title }}</h3>
      <span class="">{{ props.subtitle }}</span>
      <span class="">${{ props.price }}.00</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

const props = defineProps<{
  title: string;
  subtitle: string;
  price: number;
  imageSrc: string;
}>();

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
</script>

<style lang="scss" scoped>
.flavor-card {
  border: 1px solid #c5b0aa;
  min-height: 350px;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    border-color: var(--palette1-5);
    cursor: pointer;
    .product-info {
      background-color: var(--palette2-4);
      transition: background-color 0.3s ease;
    }
  }
}

.image-container {
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.add-to-bag-overlay {
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.group:hover .add-to-bag-overlay {
  pointer-events: auto;
  opacity: 1;
}

.product-info {
  padding: 8px 20px;
  transition: padding 0.3s ease;
}
</style>

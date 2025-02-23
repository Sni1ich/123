<template>
  <div class="wrapper xl:my-[128px] my-[35px]">
    <section class="flex justify-center flex-col container">
      <h4
        class="text-[48px] font-marcellus font-regular mb-[30px] lg:mb-[50px] text-center"
      >
        Shop by categories
      </h4>
      <!-- Мобильная версия со слайдером -->
      <div
        class="block md:hidden pt-5 pr-5 pl-5"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      >
        <transition name="fade">
          <div
            class="grid grid-cols-2 gap-[50px] w-full"
            v-if="displayedCategories.length"
          >
            <CategoryCard
              v-for="category in displayedCategories"
              :key="category.title"
              :title="category.title"
              :imageSrc="category.imageSrc"
              :theme="category.theme as 'gray' | 'brown'"
              class="col-span-1"
            />
          </div>
        </transition>

        <SliderButtons
          v-if="categories.length > 2"
          :totalButtons="Math.ceil(categories.length / 2)"
          :currentIndex="currentIndex"
          :onSlideChange="(index) => (currentIndex = index)"
          class="mt-[30px] md:mt-[50px] flex justify-center"
        />
      </div>
      <!-- Десктопная версия md -->
      <div class="hidden md:grid grid-cols-3 lg:hidden">
        <div class="col-span-2 flex flex-col gap-[30px]">
          <CategoryCard
            v-for="category in categories.slice(0, 2)"
            :key="category.title"
            :title="category.title"
            :imageSrc="category.imageSrc"
            :theme="category.theme as 'gray' | 'brown'"
            :class="category.class"
          />
        </div>
        <CategoryCard
          v-if="categories.length > 2"
          :title="categories[2].title"
          :imageSrc="categories[2].imageSrc"
          :theme="categories[2].theme as 'gray' | 'brown'"
          class="col-span-1"
        />
      </div>
      <!-- Десктопная версия lg -->
      <div class="hidden lg:grid grid-cols-4 gap-[50px] xl:hidden">
        <div class="col-span-2 flex flex-col gap-[30px]">
          <CategoryCard
            v-for="category in categories.slice(0, 2)"
            :key="category.title"
            :title="category.title"
            :imageSrc="category.imageSrc"
            :theme="category.theme as 'gray' | 'brown'"
            :class="category.class"
          />
        </div>
        <CategoryCard
          v-if="categories.length > 2"
          :title="categories[2].title"
          :imageSrc="categories[2].imageSrc"
          :theme="categories[2].theme as 'gray' | 'brown'"
          class="col-span-2"
        />
      </div>
      <!-- Десктопная версия xl -->
      <div class="hidden xl:grid grid-cols-12 gap-[30px]">
        <div class="col-span-6 flex flex-col gap-[30px]">
          <CategoryCard
            v-for="category in categories.slice(0, 2)"
            :key="category.title"
            :title="category.title"
            :imageSrc="category.imageSrc"
            :theme="category.theme as 'gray' | 'brown'"
            :class="category.class"
          />
        </div>
        <CategoryCard
          v-if="categories.length > 2"
          :title="categories[2].title"
          :imageSrc="categories[2].imageSrc"
          :theme="categories[2].theme as 'gray' | 'brown'"
          class="col-span-6"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CategoryCard from "../_ui-kit/CategoryCard.vue";
import SliderButtons from "../_ui-kit/SliderButtons.vue";

const categories = [
  {
    title: "Solid perfume",
    imageSrc: "/src/assets/imgs/cards/2.avif",
    class: "col-span-6",
    theme: "gray",
  },
  {
    title: "Scented Ovals",
    imageSrc: "/src/assets/imgs/cards/3.avif",
    class: "col-span-6",
    theme: "gray",
  },
  {
    title: "Scented Candles",
    imageSrc: "/src/assets/imgs/cards/1.avif",
    class: "col-span-6 row-span-2",
    theme: "brown",
  },
];

const currentIndex = ref(0);

const displayedCategories = computed(() => {
  const start = currentIndex.value * 2;
  return categories.slice(start, start + 2);
});

const nextSlide = () => {
  if (currentIndex.value < Math.ceil(categories.length / 2) - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

let startX = 0;
let endX = 0;

const onTouchStart = (event: TouchEvent) => {
  startX = event.touches[0].clientX;
};

const onTouchMove = (event: TouchEvent) => {
  endX = event.touches[0].clientX;
};

const onTouchEnd = () => {
  if (startX > endX + 50) {
    nextSlide();
  } else if (startX + 50 < endX) {
    prevSlide();
  }
};
</script>

<style lang="scss" scoped>
.slider-nav {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    img {
      scale: 1.1;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

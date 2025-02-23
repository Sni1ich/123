<template>
  <div class="popular-flavors-section relative">
    <div
      class="background-layer absolute w-full h-[70%] top-[5%] bg-palette2-4"
    ></div>
    <section
      class="container py-[35px] lg:py-[64px] text-center overflow-hidden"
    >
      <h2
        class="text-[48px] font-marcellus mb-[30px] lg:mb-[50px] relative z-10"
      >
        Popular flavors
      </h2>
      <button
        class="hidden xl:block slider-nav absolute left-[20rem] top-[24rem] -translate-y-1/2 z-20"
        @click="prevSlide"
      >
        <img
          src="@/assets/Chevron_Right.svg"
          alt="Previous"
          class="w-10 h-10 transform rotate-180"
        />
      </button>
      <div
        class="flex items-center justify-between relative pt-5 pr-5 pl-5"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <transition name="fade">
          <div
            class="grid grid-cols-4 w-full gap-[300px] xl:gap-[30px] relative z-10"
          >
            <FlavorCard
              v-for="flavor in displayedFlavors"
              :key="flavor.id"
              v-bind="flavor"
            />
          </div>
        </transition>
      </div>
      <button
        class="hidden xl:block slider-nav absolute right-[20rem] top-[24rem] -translate-y-1/2 z-20"
        @click="nextSlide"
      >
        <img src="@/assets/Chevron_Right.svg" alt="Next" class="w-10 h-10" />
      </button>
      <SliderButtons
        :totalButtons="Math.ceil(flavors.length / 4)"
        :currentIndex="currentIndex"
        :onSlideChange="(index) => (currentIndex = index)"
        class="mt-[30px] md:mt-[50px] flex justify-center"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import FlavorCard from "../_ui-kit/FlavorCard.vue";
import SliderButtons from "../_ui-kit/SliderButtons.vue";

const flavors = [
  {
    id: 1,
    title: "A refreshing floral fruit scent Ylang Ylang & Grapefruit",
    subtitle: "Scented Candle",
    price: 79.0,
    imageSrc: "/src/assets/imgs/cards/2.avif",
  },
  {
    id: 2,
    title: "Odour Removing Candle with Basil",
    subtitle: "Scented Candle",
    price: 82.0,
    imageSrc: "/src/assets/imgs/cards/3.avif",
  },
  {
    id: 3,
    title: "Bergamot",
    subtitle: "Scented Candle",
    price: 65.0,
    imageSrc: "/src/assets/imgs/cards/3.avif",
  },
  {
    id: 4,
    title: "A refreshing floral fruit scent Ylang Ylang & Grapefruit",
    subtitle: "Scented Candle",
    price: 79.0,
    imageSrc: "/src/assets/imgs/cards/2.avif",
  },
  {
    id: 5,
    title: "Odour Removing Candle with Basil",
    subtitle: "Scented Candle",
    price: 82.0,
    imageSrc: "/src/assets/imgs/cards/3.avif",
  },
  {
    id: 6,
    title: "Bergamot",
    subtitle: "Scented Candle",
    price: 65.0,
    imageSrc: "/src/assets/imgs/cards/3.avif",
  },
];

const currentIndex = ref(0);

const displayedFlavors = computed(() => {
  const start = currentIndex.value * 4;
  return flavors.slice(start, start + 4);
});

const touchStart = ref(0);
const touchEnd = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  touchStart.value = event.touches[0].clientX;
};

const handleTouchMove = (event: TouchEvent) => {
  touchEnd.value = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  const minSwipeDistance = 50;
  const swipeDistance = touchStart.value - touchEnd.value;

  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
};

const nextSlide = () => {
  if (currentIndex.value < Math.ceil(flavors.length / 4) - 1) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<style lang="scss" scoped>
.popular-flavors-section {
  width: 100%;
}

.slider-nav {
  width: 40px;
  height: 40px;
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

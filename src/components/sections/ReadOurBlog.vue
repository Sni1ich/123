<template>
  <div class="popular-flavors-section relative">
    <section class="container py-[35px] lg:py-[64px] text-center">
      <h2 class="text-[48px] font-marcellus mb-[50px] relative z-10">
        Read our Blog
      </h2>
      <!-- десктоп xl -->
      <div class="hidden md:grid grid-cols-12 gap-6 w-full relative z-10">
        <div class="col-span-5 col-start-1 row-span-2">
          <div
            class="image-container relative group flex-shrink-0 border border-palette1-5"
          >
            <img
              src="/src/assets/imgs/cards/5.avif"
              alt="Flavor Image"
              class="flavor-image h-[700px] w-full object-cover"
            />
            <div
              class="font-medium h-[68px] bg-palette2-4 flex items-center justify-center"
            >
              Our Charity Mission
            </div>
          </div>
        </div>
        <div class="col-span-3 col-start-6">
          <div
            class="image-container relative group flex-shrink-0 border border-palette1-5"
          >
            <img
              src="/src/assets/imgs/cards/4.avif"
              alt="Flavor Image"
              class="flavor-image h-[400px] w-full object-cover"
            />
            <div
              class="font-medium h-[68px] bg-palette2-4 flex items-center justify-center"
            >
              Why Solid?
            </div>
          </div>
        </div>
        <div class="col-span-4 col-start-9">
          <div
            class="image-container relative group flex-shrink-0 border border-palette1-5"
          >
            <img
              src="/src/assets/imgs/cards/3.avif"
              alt="Flavor Image"
              class="flavor-image object-cover h-[316px] w-full"
            />
            <div
              class="font-medium h-[68px] bg-palette2-4 flex items-center justify-center"
            >
              POV
            </div>
          </div>
          <Button class="!w-full mt-[30px]">Read more in our Blog</Button>
        </div>
        <div class="col-span-7 col-start-6">
          <div
            class="image-container relative group flex-shrink-0 border border-palette1-5"
          >
            <img
              src="/src/assets/imgs/cards/6.avif"
              alt="Flavor Image"
              class="flavor-image object-cover h-[208px] w-full"
            />
            <div
              class="font-medium h-[68px] bg-palette2-4 flex items-center justify-center"
            >
              Our Sustainable Practice
            </div>
          </div>
        </div>
      </div>
      <!-- мобилка -->
      <div
        class="md:hidden overflow-hidden relative pt-5 pr-5 pl-5"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
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
        <transition name="fade">
          <div class="flex gap-[30px]">
            <div
              v-for="card in displayedCards"
              :key="card.id"
              class="flex-shrink-0 w-[210px] h-[402px] border border-[#59260b]"
            >
              <img
                :src="card.imageSrc"
                :alt="card.text"
                class="w-full h-[332px] object-cover"
              />
              <div
                class="font-medium h-[68px] bg-palette2-4 flex items-center justify-center"
              >
                {{ card.text }}
              </div>
            </div>
          </div>
        </transition>
        <button
          class="hidden xl:block slider-nav absolute right-[20rem] top-[24rem] -translate-y-1/2 z-20"
          @click="nextSlide"
        >
          <img src="@/assets/Chevron_Right.svg" alt="Next" class="w-10 h-10" />
        </button>
        <SliderButtons
          :totalButtons="Math.ceil(cards.length / 4)"
          :currentIndex="currentIndex"
          :onSlideChange="(index) => (currentIndex = index)"
          class="mt-[30px] md:mt-[50px] flex justify-center"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "../_ui-kit/Button.vue";
import SliderButtons from "../_ui-kit/SliderButtons.vue";
import { ref, computed } from "vue";

const cards = [
  {
    id: 1,
    text: "Our Charity Mission",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-5",
  },
  {
    id: 2,
    text: "Why Solid?",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-3",
  },
  {
    id: 3,
    text: "POV",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-4",
  },
  {
    id: 4,
    text: "Our Sustainable Practice",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-7",
  },
  {
    id: 5,
    text: "POV",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-4",
  },
  {
    id: 6,
    text: "Our Sustainable Practice",
    imageSrc: "/src/assets/imgs/cards/5.avif",
    class: "col-span-7",
  },
];

const currentIndex = ref(0);

const displayedCards = computed(() => {
  const start = currentIndex.value * 4;
  return cards.slice(start, start + 4);
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
  if (currentIndex.value < Math.ceil(cards.length / 4) - 1) {
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
.grid {
  grid-template-columns: repeat(12, 1fr);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
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
</style>

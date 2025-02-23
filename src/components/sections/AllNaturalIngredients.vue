<script setup>
import SliderButtons from "../_ui-kit/SliderButtons.vue";
</script>

<template>
  <div class="container">
    <section class="flex justify-center">
      <div
        class="flex flex-col gap-[50px] md:gap-[70px] lg:gap-[119px] mt-[30px] md:mt-[50px] text-center"
      >
        <SliderButtons class="justify-center" />
        <div class="flex flex-col gap-[30px]">
          <h1
            class="text-[36px] md:text-[48px] xl:text-[72px] font-marcellus font-regular text-palette1-5 leading-[1.2]"
          >
            All Natural Ingredients
          </h1>
          <p
            class="text-palette1-5 text-[17px] md:text-[24px] xl:text-[36px] font-light"
          >
            Believing that quality will foster radiance and inspire overall
            sense of well being
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>

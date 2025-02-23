<script setup>
import Button from "../_ui-kit/Button.vue";
</script>

<template>
  <div class="wrapper">
    <section class="relative flex lg:pt-[50px] flex-col lg:flex-row">
      <div
        class="flex flex-col gap-[30px] md:gap-[65px] xl:w-[698px] my-[50px] md:my-[70px] text-center items-center lg:items-start lg:text-left w-full lg:w-[470px]"
      >
        <h1
          class="text-[36px] md:text-[48px] xl:text-[72px] font-marcellus font-regular text-palette1-5 leading-[1.2]"
        >
          Solid Parfume and scented candles for cozy home
        </h1>
        <Button>Shop Now</Button>
      </div>

      <div class="hidden lg:block">
        <img
          class="md:block xl:absolute md:w-[470px] xl:w-[698px] md:ml-[25px]"
          src="../../assets/imgs/photo.png"
          alt="start-section-2"
        />
        <img
          class="absolute bottom-[-143px] md:w-[300px] xl:w-[400px] md:left-[27rem] xl:left-[40rem] md:top-[26rem] xl:top-[28rem] transform -translate-x-1/2 z-10"
          src="../../assets/imgs/photo-1.png"
          alt="start-section-1"
        />
      </div>

      <div class="hidden sm:block lg:hidden w-full">
        <img
          class="h-[450px] object-cover w-full"
          src="../../assets/imgs/photo800.png"
          alt="start-section-2"
        />
      </div>

      <div class="sm:hidden w-full flex justify-center">
        <img src="../../assets/imgs/photo360.png" alt="start-section-2" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>

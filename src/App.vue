<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import StartSections from "./components/sections/StartSections.vue";
import AllNaturalIngredients from "./components/sections/AllNaturalIngredients.vue";
import ShopByCategories from "./components/sections/ShopByCategories.vue";
import PopularFlavors from "./components/sections/PopularFlavors.vue";
import ReadOurBlog from "./components/sections/ReadOurBlog.vue";
import YouMayAlsoLike from "./components/sections/YouMayAlsoLike.vue";
import GetInTouch from "./components/sections/GetInTouch.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main>
      <div class="bg-palette2-4 lg:pb-[200px] xl:pb-[300px]">
        <div class="container">
          <StartSections />
        </div>
      </div>
      <AllNaturalIngredients />
      <ShopByCategories />
      <PopularFlavors />
      <ReadOurBlog />
      <YouMayAlsoLike />
      <GetInTouch />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use "./assets/css/main.scss" as *;
</style>

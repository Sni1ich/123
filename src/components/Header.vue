<script setup>
import Navigation from "./Navigation.vue";
import HeaderActions from "./HeaderActions.vue";
</script>

<template>
  <header class="header bg-palette1-1 font-mukta text-[17px] font-light">
    <nav class="flex justify-between items-center py-[10px] container">
      <Navigation />
      <div class="nav__logo absolute left-1/2 -translate-x-1/2">
        <img src="../assets/logo.svg" alt="logo" class="w-15" />
      </div>
      <HeaderActions />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--palette2-4);
}
</style>

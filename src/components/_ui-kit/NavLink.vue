<template>
  <a :href="href" class="text-gray-800 hover:text-brown-600">
    <slot></slot>
  </a>
</template>

<script setup>
defineProps(["href"]);
</script>

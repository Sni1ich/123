<template>
  <ul
    :class="{ 'bg-[#59260B] bg-opacity-20': isOpen }"
    class="hidden lg:flex gap-[30px]"
  >
    <li class="">
      <NavLink href="#">Solid parfume</NavLink>
    </li>
    <li class="">
      <NavLink href="#">Scented Ovals</NavLink>
    </li>
    <li class="">
      <NavLink href="#">Scented Candles</NavLink>
    </li>
  </ul>

  <div class="lg:hidden cursor-pointer" @click="toggleMenu">
    <img src="../assets/menu.svg" alt="menu" />
  </div>

  <div
    v-if="isOpen"
    class="modal-menu fixed inset-0 z-50"
    @click.self="closeMenu"
  >
    <div class="absolute inset-0 bg-[#59260B] bg-opacity-20"></div>

    <div
      class="modal-menu-content absolute top-0 left-0 bg-[#EDEBE8] h-[480px] w-[320px] flex flex-col items-center justify-center"
    >
      <div
        class="modal-menu-close absolute top-4 left-4 cursor-pointer"
        @click="closeMenu"
      >
        <img src="../assets/Close_MD.svg" alt="close" />
      </div>

      <ul
        class="flex flex-col items-center gap-[20px] font-marcellus text-[32px]"
      >
        <li>
          <NavLink href="#" @click="closeMenu">Solid parfume</NavLink>
        </li>
        <li>
          <NavLink href="#" @click="closeMenu">Scented Ovals</NavLink>
        </li>
        <li>
          <NavLink href="#" @click="closeMenu">Scented Candles</NavLink>
        </li>
        <li>
          <NavLink href="#" @click="closeMenu">Wishlist</NavLink>
        </li>
        <li>
          <NavLink href="#" @click="closeMenu">Contacts</NavLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import NavLink from "./_ui-kit/NavLink.vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = (event) => {
  if (event && event.key === "Escape") {
    isOpen.value = false;
  } else if (!event || !event.key) {
    isOpen.value = false;
  }
};

// Обработчик клавиши Escape
const handleKeyDown = (event) => {
  if (event.key === "Escape" && isOpen.value) {
    closeMenu(event);
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
</script>

<style lang="scss" scoped></style>

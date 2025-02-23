<template>
  <footer class="bg-palette1-5 text-palette1-1 p-5">
    <div class="container mt-[50px] mb-[68px]">
      <div
        class="flex-row gap-[20px] text-palette1-1 justify-between hidden md:flex"
      >
        <div class="flex flex-col gap-[10px] w-[142px]">
          <img class="w-[60px]" src="../assets/logo copy.svg" alt="logo" />
        </div>
        <div class="flex flex-col gap-[10px] w-[142px]">
          <h4 class="font-medium">Products</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>Solid perfume</li>
            <li>Scented Ovals</li>
            <li>Scented Candles</li>
          </ul>
        </div>
        <div class="flex flex-col gap-[10px] w-[142px]">
          <h4 class="font-medium">About us</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>Our story</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div class="flex flex-col gap-[10px] w-[142px]">
          <h4 class="font-medium">Social</h4>
          <ul class="flex flex-col gap-[10px]">
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div class="flex flex-col gap-[10px] w-[189px]">
          <p>60 Midway Road, Suite 12, Green Bay WI 54280</p>
          <p>401-280-4690</p>
        </div>
      </div>
      <div class="mobile-logo flex justify-center md:hidden">
        <img
          class="w-[60px] mx-auto mb-[30px]"
          src="../assets/logo copy.svg"
          alt="logo"
        />
      </div>
      <div class="mobile flex flex-row justify-between gap-[20px] md:hidden">
        <div class="line1 flex flex-col gap-[30px] max-w-[150px]">
          <div class="flex flex-col gap-[10px]">
            <h4 class="font-medium">Products</h4>
            <ul class="flex flex-col gap-[10px]">
              <li>Solid perfume</li>
              <li>Scented Ovals</li>
              <li>Scented Candles</li>
            </ul>
          </div>
          <div class="flex flex-col gap-[10px]">
            <h4 class="font-medium">Social</h4>
            <ul class="flex flex-col gap-[10px]">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
        <div class="line2 flex flex-col gap-[30px] max-w-[150px]">
          <div class="flex flex-col gap-[10px]">
            <h4 class="font-medium">About us</h4>
            <ul class="flex flex-col gap-[10px]">
              <li>Our story</li>
              <li>Blog</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div class="flex flex-col gap-2 w-full max-w-sm">
            <p class="break-words">
              60 Midway Road, Suite 12, Green Bay WI 54280
            </p>
            <p>401-280-4690</p>
          </div>
        </div>
      </div>
      <div class="text-center mt-[50px]">
        © 2022 SV Shop. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss"></style>

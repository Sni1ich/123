<!-- border: 1px solid #59260b;
padding: 12px 28px 14px 28px;
width: 178px;
height: 54px; -->

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border: 1px solid #59260b;
  background-color: #59260b;
  padding: 12px 28px 14px 28px;
  width: 178px;
  height: 54px;
  font-family: "Mukta Vaani", sans-serif;
  font-weight: 300;
  font-size: 17px;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #59260b;
    border: 1px solid #59260b;
  }
}
</style>

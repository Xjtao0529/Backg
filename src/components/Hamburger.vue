<template>
  <div class="hamburger">
    <svg-icon icon="hamburger-opened" ></svg-icon>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hamburger {
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: 1s;
}
.hamburger:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

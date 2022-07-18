<template>
  <div class="playground">
    <Nav />
    <Main />
  </div>
</template>

<script setup lang="ts">
import Nav from "../components/Nav.vue";
import Main from "../components/Main.vue";
</script>

<style scoped>
body {
  --nav-height: 4.2rem;
}
.playground {
  height: 100%;
}
</style>

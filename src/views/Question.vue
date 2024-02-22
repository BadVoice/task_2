<template>
  <BaseContainer class="container"><p>fdhdfh</p></BaseContainer>
  <div class="keyboard">
    <input class="keyboard__input" type="radio" />
    <label>A</label>
    <br />
    <input class="keyboard__input" type="radio" />
    <label>B</label>
    <br />
    <input class="keyboard__input" type="radio" />
    <label>C</label>
  </div>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/shared/BaseContainer.vue";
</script>

<style scoped>
.container {
  position: relative;
}
.keyboard {
  display: flex;
  position: absolute;
}
</style>

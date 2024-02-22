<template>
  <BaseContainer>
    <div v-for="question in task" :key="question.id">
      <h1>{{ question.condition }}</h1>
      <p>{{ question.text }}</p>
      <img :src="question.image" alt="Nety na backende :)" />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from "@/components/shared/BaseContainer.vue";
import type { ITask } from "@/stores/types/types";

const props = defineProps<{
  task: ITask;
}>();
</script>

<style scoped></style>

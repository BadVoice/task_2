<template>
  <TaskDetails :task="task" />
  <TaskAnswers :task="task" />
</template>

<script setup lang="ts">
import TaskAnswers from "@/components/task/TaskAnswers.vue";
import TaskDetails from "@/components/task/TaskDetails.vue";
import { onMounted, ref } from "vue";
import { useTaskStore } from "@/stores/task";
import type { ITask } from "@/stores/types/types";

const taskStore = useTaskStore();

const task = ref<ITask>({} as ITask);

onMounted(async () => {
  await taskStore
    .getTasks()
    .then((response) => {
      task.value = response;
    })
    .catch((error) => {
      throw new Error(error);
    });
});
</script>

<style scoped></style>

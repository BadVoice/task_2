import { ref } from "vue";
import { defineStore } from "pinia";
import { getTasksService } from "@/services/api/task/taskAPI";

import type { ITask } from "./types/types";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref<ITask>({} as ITask);
  async function getTasks() {
    const response = await getTasksService();
    tasks.value = response;
    return response;
  }

  return { tasks, getTasks };
});

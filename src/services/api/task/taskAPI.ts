import type { ITask } from "@/stores/types/types";
import axios from "axios";

export const getTasksService = async (): Promise<ITask> => {
  const tasksData = await axios
    .get<ITask>(`${import.meta.env.VITE_API_URL}/tasks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
  return tasksData;
};

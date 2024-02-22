import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Question from "@/views/Question.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/question",
      name: "question",
      component: Question,
    },
  ],
});

export default router;

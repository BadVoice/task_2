<template>
  <div class="panel">
    <ul class="panel__keyboard" v-for="(item, index) in task" :key="index">
      <li
        class="panel__answer"
        v-for="(answer, idx) in item.answers"
        :key="idx"
      >
        <input
          v-if="Array.isArray(item.answers)"
          class="panel__radio"
          name="answer"
          type="radio"
          :value="answer"
          v-model="selectedAnswer"
        />
        <label class="panel__label">{{ answer }}</label>
      </li>
    </ul>
    <button class="panel__check" @click="submitAnswer">Check</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { ITask } from "@/stores/types/types";

const selectedAnswer = ref();

const props = defineProps<{
  task: ITask;
}>();

const submitAnswer = () => {
  if (!selectedAnswer.value) {
    console.log("Error: No answer selected");
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
.keyboard {
  display: flex;
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.panel__keyboard {
  list-style-type: none;
}

.panel__label {
  display: inline-block;
  padding: 10px 20px;
  width: 100%;
  cursor: pointer;
  background: rgb(244, 245, 253);
  font-size: 1.4em;
  color: #000000;
  text-align: center;

  transition: 0.2s ease;
}

.panel__answer input[type="radio"] {
  display: none;
}

.panel__answer label {
  display: inline-block;
  padding: 2px 9px;
  cursor: pointer;
  border: 1px solid #dad0ff;
}

.panel__answer input[type="radio"]:checked ~ label {
  background-color: #d0ffb7;
  border: 1px solid #1ca92e;
}

.panel__answer label:hover {
  background-color: #d0ffb7;
  border: 1px solid #1ca92e;
}

.panel__check {
  margin-top: 20px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.panel__check:hover {
  background-color: #f5f5f5;
}
</style>

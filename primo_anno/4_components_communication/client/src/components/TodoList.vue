<template>
  <div>
    <h1>Lista Todo</h1>
    <div>
      <div v-for="(todo, index) in todos" :key="index">
        <span> {{ index + 1 }}. {{ todo }} </span>
        <button @click="markAsDone(index)">✅</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    markAsDone(index) {
      this.$emit("check", index);
    },
  },
};
</script>

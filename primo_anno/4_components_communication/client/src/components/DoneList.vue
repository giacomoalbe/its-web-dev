<template>
  <div>
    <h1>Lista Done</h1>
    <div>
      <div v-for="(todo, index) in dones" :key="index">
        <span> {{ index + 1 }}. {{ todo }} </span>
        <!-- <button @click="markAsDone(index)">✅</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoneList",
  props: {
    dones: {
      type: Array,
      required: true,
    },
  },
};
</script>

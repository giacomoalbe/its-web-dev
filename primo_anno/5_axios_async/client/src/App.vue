<template>
  <div id="app">
    <MyComponent name="Giacomo" @answer="onChildAnswer"></MyComponent>
  </div>
</template>

<script>
import MyComponent from "@/components/MyComponent.vue";

export default {
  name: "App",
  components: {
    MyComponent,
  },
  methods: {
    onChildAnswer(answer) {
      console.log("Mio figlio ha detto questo: " + answer);
    },
  },
};
</script>

<style></style>

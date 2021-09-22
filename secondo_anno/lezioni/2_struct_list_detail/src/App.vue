<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <CarsList></CarsList>
  </div>
</template>

<script>
import CarsList from "./components/CarsList.vue";

export default {
  name: "App",
  components: {
    CarsList
  }
};
</script>

<style></style>

<template>
  <div>
    <h1>Car number {{ carId }}</h1>
    <pre>
      {{ car }}
    </pre>
    <router-link to="/cars/list">Indietro</router-link>
  </div>
</template>
<script>
import cars from "@/utils/cars.js";

export default {
  data() {
    return {
      car: null,
      carId: null
    };
  },
  mounted() {
    this.carId = this.$route.params.id;
    this.car = cars.find(car => car.id == this.carId);
  }
};
</script>

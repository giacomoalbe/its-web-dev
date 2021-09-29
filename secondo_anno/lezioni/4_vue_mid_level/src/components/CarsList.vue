<template>
  <div class="flex flex-col max-w-screen-sm mx-auto py-8">
    <div class="mb-5 text-center">
      <h1
        class="text-yellow-600 text-center text-3xl w-full mb-1"
        style="font-family: 'Alfa Slab One'"
      >
        A List of Cars
      </h1>
      <h2 class="text-sm text-gray-600">
        Ci sono {{ cars.length }} macchine in questa lista.
      </h2>
    </div>
    <div class="flex px-3 py-2">
      <input
        placeholder="Cerca una macchina, ce ne sono tante... Poi te ne restano 1000"
        type="text"
        v-model="query"
        class="flex-grow p-2 border rounded"
      />
    </div>
    <div class="flex flex-col mx-2">
      <div v-for="(car, index) in filteredCars" :key="index">
        <CarDetail :car="car"></CarDetail>
      </div>
      <div
        v-if="!filteredCars.length"
        class="text-center font-bold p-5 text-gray-400"
      >
        Nessuna auto corrisponde alla tua ricerca :(
      </div>
    </div>
  </div>
</template>
<script>
import CarDetail from "@/components/CarDetail.vue";
import cars from "@/utils/cars.js";

export default {
  components: {
    CarDetail
  },
  data() {
    return {
      query: "",
      cars
    };
  },
  mounted() {},
  computed: {
    filteredCars() {
      return this.cars.filter(car => {
        if (this.query == "") {
          return true;
        }

        if (this.query.toLowerCase() == car.model.brand.toLowerCase()) {
          return true;
        }

        return false;
      });
    }
  }
};
</script>

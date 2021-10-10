<template>
  <div class="mx-auto">
    <div>
      <div class="flex flex-col max-w-screen-sm mx-auto py-8 bg-gray-100">
        <div class="mb-5 text-center">
          <h1
            class="text-yellow-600 text-center text-3xl w-full mb-1"
            style="font-family: 'Alfa Slab One'"
          >
            A List of Cars
          </h1>
        </div>
        <div class="flex flex-col mx-2 bg-white px-5 py-3" v-if="car">
          <div class="col-span-3 mb-3 flex items-center">
            {{ car.model.brand }} {{ car.model.name }}
            <div
              v-if="car.green"
              class="ml-2 bg-green-200 text-green-900 rounded px-2 py-1 text-xs"
            >
              Green
            </div>
            <div class="ml-auto text-green-600 font-bold">
              {{ car.price }} €
            </div>
          </div>
          <div class="flex flex-col item-center m-5">
            <img :src="car.img" alt="" />
          </div>
          <div class="col-span-2 flex flex-col ml-3 text-sm justify-content">
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Chilometraggio</label>
              <span class="ml-auto">{{ car.mileage }}km</span>
            </div>
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Alimentazione</label>
              <span class="ml-auto">{{ car.fuel_type }}</span>
            </div>
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Potenza</label>
              <span class="ml-auto"
                >{{ car.power_cv }} CV ({{ car.power_kw }}kw)</span
              >
            </div>
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Trasmissione</label>
              <span class="ml-auto">{{ car.transmission_type }}</span>
            </div>
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Immatricolazione</label>
              <span class="ml-auto"
                >{{ car.matriculation.month }}/{{
                  car.matriculation.year
                }}</span
              >
            </div>
            <div class="flex items-center border-b border-gray-200 mb-2">
              <label for="">Descrizione</label>
              <span class="ml-auto">{{ car.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      class="flex flex-col text-yellow-600 text-center text-3xl w-full mb-1"
      to="/cars/list"
      >Indietro</router-link
    >
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      car: null
    };
  },
  async mounted() {
    let carId = this.$route.params.id;
    let response = await axios.get("http://localhost:3000/cars/" + carId);

    this.car = response.data;
  }
};
</script>

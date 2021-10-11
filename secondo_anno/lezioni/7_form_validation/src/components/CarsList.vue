<template>
  <div class="w-full min-h-screen max-w-screen-md mx-auto">
    <h1 class="font-bold text-2xl text-yellow-600 text-center">
      Una Lista di Macchine
    </h1>
    <div v-if="!isLoading">
      <h2 class="text-gray-600 text-lg text-center">
        Ci sono {{ cars.length }} macchine, b***h!
      </h2>
      <div class="flex flex-col mx-5">
        <div
          v-for="(car, index) in cars"
          :key="index"
          class="bg-white p-4 mb-5"
        >
          <div class="flex flex-row items-center mb-2">
            <div class="font-bold text-lg mr-2">
              {{ car.name }}
            </div>
            <div class="rounded bg-green-200 text-green-800 px-2 py-1">
              Green
            </div>
            <div class="mx-3">
              <button @click="edit(car)" class="text-yellow-600 mr-2">
                ✏ Modifica
              </button>
              <button class="text-red-600">❌ Cancella</button>
            </div>
            <div class="ml-auto">{{ car.price }} €</div>
          </div>
          <div class="flex flex-row">
            <img
              @click="goToCarView(car)"
              :src="car.img"
              alt=""
              class="w-full"
              style="max-width: 33%"
            />
            <div class="flex flex-col flex-grow ml-3 justify-between">
              <div class="flex flex-row border-b border-gray-900 pb-1">
                Kilometraggio:
                <span class="ml-auto"> {{ car.mileage }}km </span>
              </div>
              <div class="flex flex-row border-b border-gray-900 pb-1">
                Kilometraggio:
                <span class="ml-auto"> {{ car.mileage }}km </span>
              </div>
              <div class="flex flex-row border-b border-gray-900 pb-1">
                Potenza:
                <span class="ml-auto">
                  {{ car.power_hp }}cv ({{ car.power_kw }}kw)
                </span>
              </div>
              <button @click="buyCar()">
                Compra Ora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex items-center justify-center p-10">
      <span
        class="text-gray-400 font-bold text-center text-xl flex flex-col items-center"
      >
        <Spinner class="w-8 h-8"></Spinner>
        Caricamento...
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Spinner from "@/components/Spinner.vue";

export default {
  name: "CarsList",
  components: {
    Spinner
  },
  data() {
    return {
      cars: [],
      isLoading: true
    };
  },
  async mounted() {
    this.isLoading = true;

    console.log("Prima dell'await");
    let response = await axios.get("http://localhost:3000/cars");
    console.log("Dopo dell'await");
    this.cars = response.data;

    this.isLoading = false;
  },
  methods: {
    edit(car) {
      this.$router.push({
        name: "cars_edit",
        params: {
          id: car.id
        }
      });
    },
    goToCarView(car) {
      console.log(car);

      this.$router.push("/cars/view/" + car.id);
      //this.$router.push(`/cars/view/${car.id}`);
    },
    buyCar: function() {
      alert("Eheheheheheeheheheheh soddi soddi ammè!");
    }
  }
};
</script>

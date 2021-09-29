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
        @input="updateFilter($event)"
        class="flex-grow p-2 border rounded"
      />
    </div>
    <div class="flex flex-col mx-2">
      <div v-for="(car, index) in filteredCars" :key="index">
        <div
          class="grid grid-cols-3 bg-white p-5 mb-3"
          v-if="!query || query.toLowerCase() == car.model.brand.toLowerCase()"
        >
          <div class="col-span-3 mb-3 flex items-center">
            {{ car.model.brand }} {{ car.model.name }}
            <div
              v-if="car.green"
              class="ml-2 bg-green-200 text-green-900 rounded px-2 py-1 text-xs"
            >
              Green
            </div>
            <button @click="showAlert(index, car, car.model, 13, 'canino')">
              Click me b***h!
            </button>
            <div class="ml-auto text-green-600 font-bold">
              {{ car.price }} €
            </div>
          </div>
          <div class="">
            <img :src="car.img" alt="" />
          </div>
          <div class="col-span-2 flex flex-col ml-3 text-sm justify-between">
            <div class="flex items-center border-b border-gray-200">
              <label for="">Chilometraggio</label>
              <span class="ml-auto">{{ car.mileage }}km</span>
            </div>
            <div class="flex items-center border-b border-gray-200">
              <label for="">Alimentazione</label>
              <span class="ml-auto">{{ car.fuel_type }}</span>
            </div>
            <div class="flex items-center border-b border-gray-200">
              <label for="">Potenza</label>
              <span class="ml-auto"
                >{{ car.power_cv }} CV ({{ car.power_kw }}kw)</span
              >
            </div>
            <div class="flex items-center border-b border-gray-200">
              <label for="">Trasmissione</label>
              <span class="ml-auto">{{ car.transmission_type }}</span>
            </div>
            <div class="flex items-center border-b border-gray-200">
              <label for="">Immatricolazione</label>
              <span class="ml-auto"
                >{{ car.matriculation.month }}/{{
                  car.matriculation.year
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: "",
      filteredCars: [],
      cars: [
        {
          img:
            "https://assets-eu-01.kc-usercontent.com/bb5aba31-d98c-0160-8548-418b3723c58e/7174faa9-9294-44b0-8b39-4fa1f6e7275c/Toyota%20Auris%20(4).jpg",
          model: {
            brand: "Toyota",
            name: "Auris Hybrid"
          },
          green: true,
          price: 12900,
          cilindrata: 1400,
          mileage: 93000,
          fuel_type: "benzina",
          power_cv: 136,
          power_kw: 100,
          transmission_type: "automatico",
          matriculation: {
            month: 1,
            year: 2015
          }
        },
        {
          img:
            "https://prod.pictures.autoscout24.net/listing-images/48e250cc-89da-496d-a5ec-556bc35b0fa0_9d7cdebe-a928-4c94-ad29-79abf972b0c4.jpg/420x315.jpg",
          model: {
            brand: "Tesla",
            name: "Model 3"
          },
          green: true,
          price: 41000,
          cilindrata: 0,
          mileage: 41000,
          fuel_type: "elettrico",
          power_cv: 208,
          power_kw: 153,
          transmission_type: "automatico",
          matriculation: {
            month: 1,
            year: 2019
          }
        },
        {
          img:
            "https://prod.pictures.autoscout24.net/listing-images/dfa52485-4342-487e-85f3-1bf8221d11ae_c521573b-41fb-4c19-abbf-1df2a4a15d59.jpg/420x315.jpg",
          model: {
            brand: "Fiat",
            name: "Panda Young"
          },
          green: false,
          price: 1490,
          cilindrata: 1400,
          mileage: 237000,
          fuel_type: "benzina",
          power_cv: 54,
          power_kw: 40,
          transmission_type: "manuale",
          matriculation: {
            month: 5,
            year: 2002
          }
        }
      ]
    };
  },
  mounted() {
    var prova = "ciaone";

    function test() {
      let altraProva = "biellone";
      console.log("AltraProva: " + altraProva);
      prova = "provone";
    }

    console.log("Prova: " + prova);
    let altraProva = "alone";
    console.log("AltraProva: " + altraProva);

    test();
    console.log("Prova: " + prova);

    this.filteredCars = this.cars;
  },
  methods: {
    updateFilter(event) {
      let query = event.target.value;

      if (query == "") {
        this.filteredCars = this.cars;
        return;
      }

      let filteredCars = this.cars.filter(car => {
        if (query.toLowerCase() == car.model.brand.toLowerCase()) {
          return true;
        }

        return false;
      });

      this.filteredCars = filteredCars;
    },
    showAlert(
      index,
      car,
      model,
      howCool,
      bestStudentEver = "ale XD",
      worstStudentEver = "canino"
    ) {
      alert("La macchina si chiama: " + car.model.name);
      console.log(model);
      console.log(howCool);
      console.log(bestStudentEver);
      console.log(worstStudentEver);
    }
  }
};
</script>

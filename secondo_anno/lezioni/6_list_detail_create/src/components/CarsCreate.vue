<template>
  <div>
    <h1>Crea una nuova macchina</h1>
    <div class="flex">
      <div class="flex flex-col">
        <div>
          <label class="mr-5" for="">Brand Name</label>
          <input
            placeholder="Inserisci il Brand Name"
            class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
            type="text"
            v-model="newCar.model.brand"
          />
        </div>
        <div>
          <label class="mr-5" for="">Model Name</label>
          <input
            placeholder="Inserisci il Model Name"
            class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
            type="text"
            v-model="newCar.model.name"
          />
        </div>
        <div>
          <label class="mr-5" for="">Immagine</label>
          <input
            placeholder="Inserisci il link dell'immagine"
            class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
            type="text"
            v-model="newCar.img"
          />
        </div>
        <div>
          <label class="mr-5" for="">Green</label>
          <input
            placeholder="Inserisci il Brand Name"
            class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
            type="checkbox"
            v-model="newCar.green"
          />
        </div>
        <div>
          <label class="mr-5" for="">Prezzo</label>
          <input
            placeholder="Inserisci il Prezzo"
            class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
            type="number"
            v-model="newCar.price"
          />
        </div>
        <div>
          <label class="mr-5" for="fuel_type">Tipo di Alimentazione</label>
          <select name="fuel_type" id="fuel_type" v-model="newCar.fuel_type">
            <option value="benzina">Benzina</option>
            <option value="diesel">Diesel</option>
            <option value="gpl">GPL</option>
            <option value="metano">Metano</option>
            <option value="elettrica">Elettrica</option>
          </select>
        </div>
        <div>
          <label class="mr-5" for="description">Descrizione</label>
          <textarea
            v-model="newCar.description"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Inserisci la descrizione"
          ></textarea>
        </div>
      </div>
    </div>
    <div>
      <button
        class="bg-gray-500 px-3 py-1 rounded cursor-pointer"
        @click="saveCar()"
      >
        Inserisci auto nel gestionale, che poi non si pensi che la facciamo noi,
        in caso la fanno in Bangladesh, la machina. No il codice. Quello lo fa
        Canihno
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      newCar: {
        img: "",
        model: {
          brand: "Canino",
          name: "Canoni"
        },
        green: false,
        price: 0,
        cilindrata: 0,
        mileage: 0,
        fuel_type: "benzina",
        power_cv: 0,
        power_kw: 0,
        transmission_type: "automatico",
        matriculation: {
          month: 1,
          year: 1900
        },
        description:
          "Lorem non architecto adipisci lorem accusamus. Dolorum rerum corporis alias dignissimos officia eos? Repellat nesciunt vitae laborum delectus ullam debitis. Possimus dolor at excepturi rem beatae? Ad possimus alias et"
      }
    };
  },
  methods: {
    async saveCar() {
      console.log(this.newCar);

      let response = await axios.post(
        "http://localhost:3000/cars",
        this.newCar
      );

      console.log(response.data);

      this.$router.push("/cars/list");
    }
  }
};
</script>

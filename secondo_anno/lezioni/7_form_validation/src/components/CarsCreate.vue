<template>
  <div class="px-5">
    <h1 class="text-center text-xl mb-5 font-bold">Crea una nuova macchina</h1>
    <div class="flex">
      <div class="flex flex-col flex-grow">
        <div
          class="grid grid-cols-3 mb-3 gap-5"
          v-for="(field, index) in formFields"
          :key="index"
        >
          <label
            :for="field.code"
            class="flex items-center font-bold text-gray-600"
          >
            {{ field.label }}
          </label>
          <div class="flex-grow">
            <div v-if="field.type == 'text'">
              <input
                :id="field.code"
                :placeholder="field.placeholder"
                class="flex-grow p-2 px-3 rounded bg-white border-gray-300 focus:outline-none w-full"
                type="text"
                v-model="newCar[field.code]"
              />
            </div>
            <div v-if="field.type == 'checkbox'">
              <input
                :id="field.code"
                class="p-2 px-3 rounded bg-white border-gray-300 focus:outline-none"
                type="checkbox"
                v-model="newCar[field.code]"
              />
            </div>
            <div v-if="field.type == 'textarea'">
              <textarea
                v-model="newCar[field.code]"
                :name="field.code"
                :id="field.code"
                class="flex-grow p-2 px-3 rounded bg-white border-gray-300 focus:outline-none w-full"
                cols="30"
                rows="10"
                :placeholder="field.placeholder"
              ></textarea>
            </div>
            <div v-if="field.type == 'select'">
              <select
                class="flex-grow p-2 px-3 rounded bg-white border-gray-300 focus:outline-none w-full"
                :name="field.code"
                :id="field.code"
                v-model="newCar[field.code]"
              >
                <option
                  v-for="option in field.options"
                  :key="option.value"
                  :value="option.value"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div v-if="field.type == 'number'">
              <input
                :id="field.code"
                :placeholder="field.placeholder"
                class="flex-grow p-2 px-3 rounded bg-white border-gray-300 focus:outline-none w-full"
                type="number"
                v-model="newCar[field.code]"
              />
            </div>
          </div>
          <div
            class="flex items-center px-3 text-red-600"
            v-if="field.required"
          >
            <span v-if="!newCar[field.code]">
              Questo campo è obbligatorio
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        :disabled="!isFormValid"
        :class="{
          'bg-yellow-500 cursor-pointer': isFormValid,
          'bg-gray-500 cursor-not-allowed': !isFormValid
        }"
        class="px-3 py-1 rounded"
        @click="saveCar()"
      >
        Inserisci auto
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      isEdit: false,
      newCar: {
        img: "",
        name: "",
        brand: "",
        green: false,
        price: 0,
        cilindrata: 0,
        mileage: 0,
        fuel_type: null,
        power_cv: 0,
        power_kw: 0,
        transmission_type: "automatico",
        matriculation_month: 1,
        matriculation_year: 1900,
        description: ""
      },
      formFields: [
        {
          code: "brand",
          label: "Brand Name",
          type: "text",
          placeholder: "Inserisci il nome del brand",
          required: true
        },
        {
          code: "name",
          label: "Model Name",
          type: "text",
          placeholder: "Inserisci il nome del modello",
          required: true
        },
        {
          code: "price",
          label: "Prezzo",
          type: "number",
          placeholder: "Inserisci il prezzo del modello",
          required: true
        },
        {
          code: "img",
          label: "Immmagine",
          type: "text",
          placeholder: "Inserisci l'URL dell'immagine (no Google)",
          required: true
        },
        {
          code: "fuel_type",
          label: "Tipo di Alimentazione",
          type: "select",
          required: true,
          options: [
            {
              value: "gasoline",
              label: "Benzina"
            },
            {
              value: "diesel",
              label: "Gasolio"
            },
            {
              value: "lpg",
              label: "GPL"
            },
            {
              value: "methane",
              label: "Metano"
            },
            {
              value: "elctric",
              label: "Elettrica"
            },
            {
              value: "hybrid",
              label: "Ibrida"
            },
            {
              value: "stepcar",
              label: "A Pedali"
            }
          ]
        },
        {
          code: "green",
          label: "Green",
          type: "checkbox"
        },
        {
          code: "description",
          label: "Descrizione",
          type: "textarea"
        }
      ]
    };
  },
  async mounted() {
    if (this.$route.name == "cars_edit") {
      this.isEdit = true;
      let carId = this.$route.params.id;
      let response = await axios.get("http://localhost:3000/cars/" + carId);

      this.newCar = response.data;
      console.log(this.newCar);
    }
  },
  methods: {
    async saveCar() {
      let response;

      if (this.isEdit) {
        response = await axios.put(
          "http://localhost:3000/cars/" + this.$route.params.id,
          this.newCar
        );
      } else {
        response = await axios.post("http://localhost:3000/cars", this.newCar);
      }

      console.log(response.data);

      this.$router.push("/cars/list");
    }
  },
  computed: {
    isFormValid() {
      let formIsValid = true;

      this.formFields.forEach(field => {
        if (field.required) {
          formIsValid = formIsValid && !!this.newCar[field.code];
        }
      });

      return formIsValid;
    }
  }
};
</script>

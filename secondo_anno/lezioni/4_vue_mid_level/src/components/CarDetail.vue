<template>
  <div @click="goToCarDetail(car)" class="grid grid-cols-3 bg-white p-5 mb-3">
    <div class="col-span-3 mb-3 flex items-center">
      {{ car.model.brand }} {{ car.model.name }}
      <div
        v-if="car.green"
        class="ml-2 bg-green-200 text-green-900 rounded px-2 py-1 text-xs"
      >
        Green
      </div>
      <div class="ml-auto text-green-600 font-bold">
        {{ car.price | currency }}
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
        <span class="ml-auto">{{ car | power("power_kw", "power_cv") }} </span>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="">Trasmissione</label>
        <span class="ml-auto">{{ car.transmission_type }}</span>
      </div>
      <div class="flex items-center border-b border-gray-200">
        <label for="">Immatricolazione</label>
        <span class="ml-auto"
          >{{ car.matriculation.month }}/{{ car.matriculation.year }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    car: {
      type: Object
    }
  },
  filters: {
    currency: value => {
      console.log(value);
      return value + " €";
    },
    power: (value, fieldKw, fieldCv) => {
      let valueCV = value[fieldCv];
      let valueKW = value[fieldKw];

      return valueCV + " CV (" + valueKW + " Kw)";
    }
  },
  methods: {
    goToCarDetail(car) {
      console.log(car);
      this.$router.push({
        name: "view_car",
        params: {
          id: car.id
        }
      });
    }
  }
};
</script>

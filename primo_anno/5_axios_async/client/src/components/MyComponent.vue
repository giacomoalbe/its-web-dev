<template>
  <div>
    {{ message }} {{ name }} mi vuole far trovare lavoro!!!!
    <button @click="insultDaddyComponent()">Rispondi a tuo padre!</button>
    <div v-if="!isLoading">
      <img :src="infoGatto.url" width="640" height="480" alt="" />
    </div>
    <div v-else>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        width="400"
        height="400"
        alt=""
      />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "MyComponent",
  props: {
    name: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isLoading: true,
      infoGatto: null,
      message: "Aiuto",
    };
  },
  async mounted() {
    console.log(this.infoGatto);
    console.log("Prima della chiamata");

    this.isLoading = true;

    let dataGatto = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );

    this.isLoading = false;

    console.log("Dopo la chiamata");

    this.infoGatto = dataGatto.data[0];

    console.log(this.infoGatto);
  },
  methods: {
    printGatto(dataGatto) {
      this.infoGatto = dataGatto.data[0];
      console.log(this.infoGatto);
    },
    boom() {
      console.log("booooom");
    },
    insultDaddyComponent() {
      console.log("Gliene dico four a quello");
      this.$emit(
        "answer",
        "Ehi mi presti 20 € che sabato *devo* andare al Berfi's?"
      );
    },
  },
  computed: {},
};
</script>
<style></style>

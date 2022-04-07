<template>
  <div>
    <h1>Saluta, {{ $route.params.nome }}!</h1>
    <h2>Numero: {{ $route.params.numero }}</h2>

    <div v-for="(user, index) in users" :key="index">
      {{ index + 1 }}. {{ user.name }} {{ user.surname }}
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  async mounted() {
    console.log(this.$route);

    let response = await axios.get("http://localhost/sites/?prova=10", {
      userId: 10,
      userMod: "history",
    });

    this.users = response.data;
  },
};
</script>

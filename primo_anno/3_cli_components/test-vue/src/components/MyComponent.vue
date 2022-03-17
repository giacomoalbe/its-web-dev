<template>
  <div>
    {{ message }}
    {{ myPersonalMessage }}
    <button @click="sayHello">Say hello</button>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      message: "Che bello il mio messaggio",
    };
  },
  mounted() {
    console.log("Codice che viene eseguito quando App è montato");
  },
  methods: {
    sayHello() {
      console.log("Metodo say hello!");
    },
  },
  computed: {
    myPersonalMessage() {
      return this.message + " xD";
    },
  },
};
</script>

<style></style>

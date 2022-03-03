var app = new Vue({
  el: "#app",
  data: {
    message: "I Love Vue JS more than React 🌱",
    password: "",
    dado: 0,
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    hello() {
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
      console.log("Ciaone!");
    },
    randNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    tirTheDad() {
      this.dado = this.randNumber(1, 6);
    }
  },
});

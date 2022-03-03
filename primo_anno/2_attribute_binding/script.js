var app = new Vue({
  el: "#app",
  data: {
    message: "Si può fare!",
    newText: "",
    bgColor: "",
    imgUrl: "",
    password: "",
  },
  mounted() {
    console.log("Componente montato");
  },
  methods: {
    onInputChange(evt) {
      let value = evt.target.value;
      this.newText = value;
    },
    clearText() {
      this.newText = "";
    },
  },
  computed: {
    isPasswordValid() {
      return this.password.length > 8;
    }
  },
});

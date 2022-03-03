var app = new Vue({
  el: "#app",
  data: {
    giorni: [
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato",
      "Domenica",
    ],
    giornoSelezionato: "",
  },
  mounted() {
    this.giorni.push("Ciaonedì");
  },
  computed: {
  },
  methods: {
    scancelGiorno(index) {
      this.giorni.splice(index, 1);
    },
    selectGiorno(giorno) {
      this.giornoSelezionato = giorno;
    },
    cancelSelection() {
      this.giornoSelezionato = null;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    buttons: [
      {
        label: "Attiva DSNF",
        code: "activate_dsnf",
        icon: "😇",
      },
      {
        label: "Pausa DSNF",
        code: "pause_dsnf",
        icon: "😫",
      },
      {
        label: "Stoppa DSNF",
        code: "stop_dnsf",
        icon: "🛑",
      },
      {
        label: "Lancia fiori",
        code: "throw_flowers",
        icon: "🌻",
      },
      {
        label: "Conquista il mondo",
        code: "conquer_world",
        icon: "🇷🇺",
      },
    ],
    selectedButton: "",
  },
  mounted() {
  },
  methods: {
    selectButton(buttonId) {
      this.selectedButton = buttonId;
    },
    isButtonSelected(buttonId) {
      return {
        'selected': this.selectedButton == buttonId
      };
    },
  },
  computed: {
  }
});

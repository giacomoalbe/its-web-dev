<template>
  <div>{{ testData }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      testData: "",
    };
  },
  async mounted() {
    await this.getData();
  },
  components: {},
  methods: {
    async getData() {
      let response = await axios.get("api/test");
      this.testData = response.data;
    },
  },
};
</script>

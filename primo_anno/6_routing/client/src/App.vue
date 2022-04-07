<template>
  <div id="app">
    <div>
      <h1>Ciaone</h1>
      <router-link to="/hello">Hello</router-link>
      <router-link to="/about">About</router-link>
      <a @click="goToHell">Vai ad Hello</a>
      <a @click="goToAbout">Vai ad About</a>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    goToHell() {
      this.$router.push("/hello");
    },
    goToAbout() {
      this.$router.push({
        name: "About",
      });
    },
  },
};
</script>

<style></style>

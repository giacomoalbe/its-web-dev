<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!user" to="/login">Sign in |</router-link>
      <template v-if="user">
        <router-link v-if="user" to="/account">{{ userFullName }}</router-link>
        |
        <a href="#" @click="signOut">Sign out</a>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navigation",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    async signOut() {
      await this.logout();

      this.$router.push("/login");
    },
  },
  computed: {
    ...mapGetters({
      user: "auth/user",
    }),
    userFullName() {
      return `${this.user.name}`;
    },
  },
};
</script>

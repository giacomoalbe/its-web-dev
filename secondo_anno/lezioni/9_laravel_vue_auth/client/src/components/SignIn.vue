<template>
  <form action="#" @submit.prevent="submit">
    <div>
      <label for="email">Email address</label>
      <input type="text" name="email" id="email" v-model="form.email" />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        v-model="form.password"
      />
    </div>
    <div>
      <button type="submit">Sign in</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    //
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submit() {
      await this.login(this.form);

      this.$router.replace({ name: "home" });
    },
  },
};
</script>

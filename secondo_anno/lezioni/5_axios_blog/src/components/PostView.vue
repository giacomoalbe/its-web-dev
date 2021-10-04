<template>
  <div>
    <div>
      {{ post.brief }}
    </div>
    <router-link to="/posts/list">Indietro</router-link>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "PostView",
  data() {
    return {
      post: {}
    };
  },
  async mounted() {
    let postId = this.$route.params.id;
    console.log(postId);

    let response = await axios.get("http://localhost:3000/posts/" + postId);

    this.post = response.data;
  }
};
</script>

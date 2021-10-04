<template>
  <div class="">
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    let response = await axios.get("http://localhost:3000/posts");

    this.posts = response.data;
  }
};
</script>

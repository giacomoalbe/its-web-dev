<template>
  <div class="">
    <div v-for="post in posts" :key="post.id" @click="goToPostDetail(post)">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostsList",
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
  },
  methods: {
    goToPostDetail(post) {
      let url = "/posts/view/" + post.id;
      this.$router.push(url);
    }
  }
};
</script>

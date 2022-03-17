<template>
  <div>
    <a
      :class="{
        selected: value == 'nuovo',
      }"
      @click="changeSection('nuovo')"
      >Nuovo</a
    >
    <a
      :class="{
        selected: value == 'todo',
      }"
      @click="changeSection('todo')"
      >Todo</a
    >
    <a
      :class="{
        selected: value == 'done',
      }"
      @click="changeSection('done')"
      >Done</a
    >
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    /*
    section: {
      type: String,
      required: true,
    },
    */
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    changeSection(newSection) {
      this.$emit("input", newSection);
    },
  },
};
</script>

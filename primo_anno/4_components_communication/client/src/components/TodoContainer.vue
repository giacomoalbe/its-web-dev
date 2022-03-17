<template>
  <div>
    <!-- <Navbar :value="section" @input="$event => section = $event.target.value"></Navbar> -->
    <Navbar v-model="section"></Navbar>
    <div>
      <div v-if="section == 'nuovo'">
        <h1>Crea un nuovo todo</h1>
        <div>
          <input
            type="text"
            placeholder="Scrivi qui quello che dice il tuo quore <3"
            v-model="newTodo"
          />
          <button :disabled="!newTodo" @click="addTodo()">Aggiungi</button>
        </div>
      </div>
      <div v-if="section == 'todo'">
        <TodoList :todos="todos" @check="markAsDone"></TodoList>
      </div>
      <div v-if="section == 'done'">
        <DoneList :dones="dones"></DoneList>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import DoneList from "@/components/DoneList";
import Navbar from "@/components/Navbar";

export default {
  name: "TodoContainer",
  components: {
    TodoList,
    DoneList,
    Navbar,
  },
  data() {
    return {
      section: "",
      newTodo: "studiate",
      todos: [],
      dones: [],
    };
  },
  mounted() {
    this.section = "todo";
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);

      this.newTodo = "";
    },
    markAsDone(index) {
      let doneTodo = this.todos.splice(index, 1);
      doneTodo = doneTodo[0];

      this.dones.push(doneTodo);
    },
  },
};
</script>
<style>
.selected {
  background-color: red;
}
</style>

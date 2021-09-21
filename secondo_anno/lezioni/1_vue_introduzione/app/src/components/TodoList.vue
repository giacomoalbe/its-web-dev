<template>
  <div class="flex flex-col max-w-screen-sm mx-auto items-center my-10 mt-12">
    <h1
      class="text-blue-600 text-4xl text-center mb-8"
      style="font-family: 'Alfa Slab One'"
    >
      The Best Freaking Todo List
    </h1>
    <div class="flex w-full py-3">
      <input
        placeholder="Terraformare Marte..."
        type="text"
        v-model="newTodo"
        class="border-2 p-3 px-4 rounded bg-white flex-grow mr-5"
      />
      <button
        class="disabled:bg-gray-200 bg-blue-400 text-white rounded py-2 px-3 hover:bg-blue-600"
        :disabled="!newTodo"
        @click="addTodo()"
      >
        Lo farò
      </button>
    </div>
    <div class="border-t border-gray-200 w-full my-3 py-5">
      <div class="grid grid-cols-3 gap-5 mb-5">
        <div class="flex justify-center items-center text-lg">
          <span class="text-2xl text-blue-600 font-bold mr-2">
            {{ totalTodo }}
          </span>
          Todo inseriti
        </div>
        <div class="flex justify-center items-center text-lg">
          <span class="text-2xl text-blue-600 font-bold mr-2">
            {{ doneTodos }}
          </span>
          Todo completati
        </div>
        <div class="flex justify-center items-center text-lg">
          <span class="text-2xl text-blue-600 font-bold mr-2">
            {{ remainingTodo }}
          </span>
          Todo da fare
        </div>
      </div>
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="flex flex-row items-center p-3 px-4 border border-gray-200 rounded mb-2"
      >
        <span class="mr-auto">
          <span class="text-blue-500"> {{ index + 1 }}. </span>
          {{ todo }}
        </span>
        <div>
          <button
            @click="setAsDone(index)"
            class="p-2 rounded hover:bg-blue-400 hover:text-white"
          >
            Fatto ✅
          </button>
        </div>
      </div>
      <div
        v-if="todos.length == 0"
        class="text-center text-xl text-gray-400 text-bold mt-8"
      >
        Sembra che tu abbia fatto tutto (o non abbia ancora fatto niente 😎)
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todos: [],
      totalTodo: 0,
      doneTodos: 0,
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
      this.totalTodo += 1;
    },
    setAsDone(index) {
      this.todos.splice(index, 1);
      this.doneTodos += 1;
    }
  },
  computed: {
    remainingTodo() {
      return this.todos.length;
    }
  }
};
</script>

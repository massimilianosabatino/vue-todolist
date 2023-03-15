const { createApp } = Vue

createApp({
  data() {
    return {
      todos: [
        {
            text: 'prova 1',
            done: false
        },
        {
            text: 'prova 2',
            done: true
        }
      ]
    }
  },
  methods: {
    removeItem(index){
        // delete todos[index];
        this.todos.splice(index, 1)
    }
  }
}).mount('#app')
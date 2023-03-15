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
  }
}).mount('#app')
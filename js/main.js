const { createApp } = Vue

createApp({
  data() {
    return {
        newTask: '',
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
        this.todos.splice(index, 1);
    },
    addItem(){
        this.todos.push({text: this.newTask, done: false});
        this.newTask = '';
    },
    getDone(){
        const clickedElement = event.currentTarget.getAttribute('position');
        this.todos[clickedElement].done = !this.todos[clickedElement].done;
    }
  }
}).mount('#app')
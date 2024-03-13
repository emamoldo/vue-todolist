const { createApp } = Vue 
createApp({
    data() {
        return{
            newTask: '',
            tasks: [
                
            ]
        }
    },
    methods: {
        addTask(){
            console.log(this.newTask);
            this.tasks.push(this.newTask)
        }
    }
}).mount('#app')


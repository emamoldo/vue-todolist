const { createApp } = Vue 
createApp({
    data() {
        return{
            newTask: '',
            tasks: [
                
            ],
            
            if:(newTask.length === tasks.length)
                console.log('le parole sono uguali')
        }

    },
    methods: {
        addTask(){
            console.log(this.newTask);
            this.tasks.unshift(this.newTask)
        }
    }
}).mount('#app')
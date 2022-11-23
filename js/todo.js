import  {ToDoItem}  from "./classUtilities.js";

const { createApp } = Vue;


createApp({
  
  data () {
    
    return {
        toDoList:[
            new ToDoItem("prova",false),
            new ToDoItem("prova2",false),
            new ToDoItem("prova3",false),
            new ToDoItem("prova4",false),

        ]

    };
  },
  mounted(){
    
    
  }
}).mount("#app")
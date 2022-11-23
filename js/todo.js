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

        ],
        newTask:{
            text:""
        }

    };
  },
  methods:{
    onTaskClick(iClickedTask){
        const taskClicked=this.toDoList[iClickedTask];
        taskClicked.done=!taskClicked.done;
        
    },
    onDeleteTask(iDeleteTask){
        this.toDoList.splice(iDeleteTask,1);
        

    },
    taskSubmit(){
        const newTask=new ToDoItem(this.newTask.text,false);
        this.toDoList.push(newTask)
    }

  },
  mounted(){
    
    
  }
}).mount("#app")
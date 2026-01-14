import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
 let[todos,setTodos] = useState([{task:"sampletask",id:uuidv4(),isDone :false}]);
 let[newTodo,setNewTodo] = useState("");
  //console.log(tasks);

  let addNewTask =()=>{
    if (newTodo.trim() === "") return;
    //console.log("add a new task");
    setTodos((prevTodos)=>{
     return  [ ...prevTodos,{ task: newTodo, id: uuidv4(),isDone:false }]
    });
    setNewTodo("");
  }

  let updateTodoValue = (event) =>{
    //console.log(event.target.value);
    setNewTodo(event.target.value);
  }

  let deleteTodo = (id) =>{
    setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
  }

  let markAsDone = () =>{
     setTodos((prevTodos)=>{
      return prevTodos.map((todo)=>
        ({
            ...todo,
            isDone: true,
          }));
     });
    //console.log("mark as done");
  }
    return (
       <div>
        <div className="todobox">
        <h3>Todo App</h3>
        <input placeholder="Add a task"
         value={newTodo} 
         onChange={updateTodoValue}>
         </input>
        <button onClick= {addNewTask}>Add Task</button>
        <br /><br />
        <hr />
        <h3>Tasks :</h3>
        <ul>
           {
            todos.map((todo) =>(
                <li key={todo.id}>
                 <span style={todo.isDone ?  {textDecorationLine : "line-through" }:{}}>{todo.task}</span>
                 <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </li>
            ))
           }
        </ul>
        <button onClick={markAsDone}>Mark as Done</button>
        </div>
    </div>
    )
}
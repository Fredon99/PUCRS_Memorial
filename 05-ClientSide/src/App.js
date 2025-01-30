import React, { useState } from "react";
import "./App.css";

function App() {
  
const [taskTyped,setTaskTyped] = useState("");
const [tasksArray, setTasksArray] = useState([]);

function addTask() {
  if (taskTyped !== "") {
    setTasksArray([...tasksArray, {text: taskTyped, completed: false}]);
    setTaskTyped("");
  }
}

function removeTask(index) {
  const updatedTasks = tasksArray.filter((task, i) => {
    return i !== index
  })
  setTasksArray(updatedTasks)
}

function markAsDone(index) {
  const updatedTasks = tasksArray.map((task, i) => {
    if (i === index) {
      return {...task, completed: !task.completed}
    } else {
      return task
    }})
  setTasksArray(updatedTasks);
}

  return (
    <div className="card">
      <h1> Lista de afazeres </h1>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Digite a sua nova tarefa"
          value={taskTyped}
          onChange={(e) => {setTaskTyped(e.target.value)}}
          />
        <button
          onClick={() => {addTask()}}
        > 
        Criar 
        </button>
      </div>

      <ul className="task-list">
        {tasksArray.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}> 
            <span onClick ={() => {markAsDone(index)}}> {task.text} </span> 
          <button onClick={() => {removeTask(index)}}> Deletar </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
import { BiBluetooth } from "react-icons/bi";
import "./style.css";
import React from "react";
import { CgColorBucket } from "react-icons/cg";
import { MdHeight } from "react-icons/md";
import { RiAddLargeLine } from "react-icons/ri";

export default function App() {
  const [todoList, setTodoList] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        taskName: newTask,
      };
      setTodoList([...todoList, task]);
      setNewTask(""); // Clear the input after adding the task
    }
  };

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const taskElements = todoList.map((task) => (
    <div className="list--elements" key={task.id}>
      <h4>{task.taskName}</h4>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
  ));

  return (
    <div className="App">
      <div className="title">
      <h3>CRUD</h3>
      </div>
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button onClick={addTask}><RiAddLargeLine className="icon" /></button>
      </div>

      <div className="list">
        {taskElements}
      </div>
    </div>
  );
}

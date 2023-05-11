import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const [todoList, setTodoList] = React.useState(["eat", "sleep", "code"]);

  const addNewTask = (e) => {
    const newTask = document.getElementById("newTask").value;
    e.preventDefault();
    setTodoList([...todoList, newTask]);
  };

  const deleteTask = (task) => {
    const updatedList = todoList.filter((taskToDelete) => taskToDelete !== task);
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>These are the tasks to be completed</h1>
      <ol>
        {todoList.map((task) => (
          <li key={task}>
            {task} <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ol>
      <h1>Do you want to add more?</h1>
      <form onSubmit={addNewTask}>
        <input type="text" id="newTask" placeholder="Enter a new task" />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default App;

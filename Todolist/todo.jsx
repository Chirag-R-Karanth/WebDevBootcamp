import React from "react";
import {createRoot} from "react-dom/client"; // Note the updated import path

const root = createRoot(document.getElementById("root"));

function Todo() {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  function handleAddTodo() {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleDeleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
root.render(<Todo />);
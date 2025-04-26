import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";


// Use "tag" to match your HTML
const root = createRoot(document.getElementById("root"));

function Todo() {
  // Load from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all"); // all, active, completed
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    
    setTodos([
      ...todos, 
      { 
        id: Date.now(),
        text: newTodo,
        completed: false,
        createdAt: new Date()
      }
    ]);
    setNewTodo("");
  }

  function handleDeleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleToggleComplete(id) {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function startEditing(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function saveEdit() {
    setTodos(
      todos.map(todo => 
        todo.id === editingId ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      saveEdit();
    } else if (e.key === 'Escape') {
      setEditingId(null);
    }
  }

  function clearCompleted() {
    setTodos(todos.filter(todo => !todo.completed));
  }

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      
      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button type="submit" className="add-button">Add</button>
      </form>

      {todos.length > 0 && (
        <div className="filters">
          <button 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'active' : ''}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('active')}
            className={filter === 'active' ? 'active' : ''}
          >
            Active
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={filter === 'completed' ? 'active' : ''}
          >
            Completed
          </button>
        </div>
      )}

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onBlur={saveEdit}
                onKeyDown={handleKeyDown}
                autoFocus
                className="edit-input"
              />
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span 
                  className="todo-text"
                  onDoubleClick={() => startEditing(todo)}
                >
                  {todo.text}
                </span>
                <div className="todo-actions">
                  <button onClick={() => startEditing(todo)} className="edit-button">
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteTodo(todo.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="todo-footer">
          <span>{activeTodosCount} items left</span>
          {todos.some(todo => todo.completed) && (
            <button onClick={clearCompleted} className="clear-completed">
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
}

root.render(<Todo />);
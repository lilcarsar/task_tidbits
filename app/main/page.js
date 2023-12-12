"use client";


import React, { useState, useEffect } from 'react';
import { getTodos, addTodo, deleteTodo, updateTodo } from './_services/todo-list-service';
import Heading from './heading';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const todosFromDb = await getTodos();
      setTodos(todosFromDb);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = async () => {
    const todoId = await addTodo({ text: newTodo, completed: false });
    setTodos([...todos, { id: todoId, text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = async (id) => {
    const todo = todos.find(todo => todo.id === id);
    const updatedTodo = { ...todo, completed: !todo.completed };
    await updateTodo(id, updatedTodo);
    setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
  };

  return (
    <div style={{ backgroundColor: "#FAEDCD", color: "#000", minHeight: "100vh", padding: "1em", display: "flex", 
    flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Heading title="Todo List" />
      <input value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo} style={{ color: "#000", textDecoration: "none", 
      backgroundColor: "#FFF", padding: "10px 20px", marginLeft: '20px', borderRadius: "5px", margin: "10px" }}>Add Todo</button>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => handleToggleComplete(todo.id)} />
          {todo.text}
          <button onClick={() => handleDeleteTodo(todo.id)} style={{ marginLeft: '20px' }}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
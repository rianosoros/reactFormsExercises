import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;

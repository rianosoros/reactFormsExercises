import React from 'react';

function Todo({ todo, removeTodo }) {
  return (
    <div>
      <span>{todo.task}</span>
      <button onClick={() => removeTodo(todo.id)}>X</button>
    </div>
  );
}

export default Todo;

import React, { useState } from 'react';

export default function TodoItem({ todo, onDelete }) {
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const toggleComplete = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      
        <button className="btn btn-sm btn-success" onClick={toggleComplete}>
          {isCompleted ? 'Undo Complete' : 'Complete Task'}
        </button>
        <button className="btn btn-sm btn-warning favorite " onClick={toggleFavorite}>
          {isFavorite ? '★' : '☆'}
        </button>
      <hr />
    </>
  );
}

import React, { Component, useState, useEffect } from 'react';
import TodoForm from './TodoForm';
const url = 'http://127.0.0.1:3001/api/v1/todos';

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const fetchData = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setTodo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <TodoForm />
      {todo.map((item) => {
        return <p key={item.id}>{item.task}</p>;
      })}
    </>
  );
};

export default TodoList;

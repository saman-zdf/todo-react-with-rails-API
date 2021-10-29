import React, { useState } from 'react';
import TodoList from './TodoList/TodoList';
import Typography from '@mui/material/Typography';
import './App.css';

const App = () => {
  return (
    <>
      <Typography variant='h1'>Todo Stream</Typography>
      <hr />
      <TodoList />
    </>
  );
};

export default App;

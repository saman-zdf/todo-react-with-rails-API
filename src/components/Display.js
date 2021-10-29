import React from 'react';
import { DisplayDiv, TodoPara, ParaDiv } from './Style';

const Display = ({ todos, removeTodo }) => {
  return (
    <>
      <DisplayDiv>
        <ParaDiv>
          {todos.map((todo, idx) => {
            return (
              <>
                <TodoPara key={idx}>{todo}</TodoPara>
                <button onClick={removeTodo}>Remove</button>
              </>
            );
          })}
        </ParaDiv>
      </DisplayDiv>
    </>
  );
};

export default Display;

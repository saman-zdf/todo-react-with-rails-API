import React from 'react';
import { Wrapper, TextInput, FromEl, SubmitBtn } from './Style';

const Form = ({ handleInput, input, onInputChange }) => {
  return (
    <>
      <Wrapper>
        <FromEl onSubmit={handleInput}>
          <TextInput
            type='text'
            placeholder='Write ToDo...'
            value={input}
            onChange={onInputChange}
          />
          <SubmitBtn type='submit' />
        </FromEl>
      </Wrapper>
    </>
  );
};

export default Form;

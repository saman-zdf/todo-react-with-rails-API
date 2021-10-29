import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #e9e9e9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const Wrapper = styled.div`
  width: 500px;
  background-color: #fff;
  display: grid;
  place-items: center;
  margin: 1rem 0;
`;
export const FromEl = styled.form`
  padding: 30px;
`;

export const TextInput = styled.input`
  padding: 1rem;
  border: none;
  border-bottom: 3px solid #888;
  display: inline-block;
  font-family: inherit;
  font-size: 1.2rem;
  &:focus {
    outline: 0;
  }
`;
export const SubmitBtn = styled.input`
  padding: 0.6rem 0.9rem;
  background-color: #cc82ff;
  color: #fff;
  border: none;
  border-radius: 5px;
  display: block;
  margin: 1rem auto;

  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 5rem;
  color: #cc82ff;
  opacity: 0.5;
`;
export const DisplayDiv = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

export const ParaDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const TodoPara = styled.p`
  font-size: 1.2rem;
  width: 100%;
  margin: 0.5rem 0;
  border-bottom: 1px solid #cc82ff;
  padding-bottom: 0.3rem;
  margin-bottom: 0.4rem;
`;

export const Button = styled.button`
  border: none;
  background-color: #cc82ff;
  cursor: pointer;
  font-family: inherit;
  color: #fff;
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 5px;
  transition: opacity 0.4s ease-in;
  &:hover {
    opacity: 0.8;
  }
`;

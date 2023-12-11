import styled from "styled-components";

export const Input = styled.input`
  outline: none;
  padding: 10px;
  min-height: 45px;
  width: calc(100% - 20px);
  border-radius: 8px;
  font-size: 14px;
  height: 40px; 
  border: 1px solid #dadada;
  background-color: white;
  color: #535353;
  &::placeholder { 
    color: #9b9b9b;
    opacity: 1; 
  }

  &:focus {
    border-color: #003380;
    box-shadow: 0 0 4px #0041a3;
  }

  &:invalid {
    border-color: red; 
    box-shadow: 0 0 4px red; 
  }

  &:hover {
    border-color: #ccc;
  }
`;

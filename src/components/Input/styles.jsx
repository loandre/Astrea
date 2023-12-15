import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  outline: none;
  padding: 10px;
  min-height: 45px;
  width: 100%; 
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid #dadada;
  background-color: white;
  color: #535353;
  box-sizing: border-box; 

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

export const EndAdornment = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
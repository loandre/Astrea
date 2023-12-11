import styled from "styled-components";

export const Button = styled.button`
  padding: 10px;
  min-height: 45px;
  outline: none;
  border: none;
  border-radius: 8px;
  width: calc(100% - 20px);
  cursor: pointer;
  background-color: #003380; 
  color: white;
  font-weight: 600;
  font-size: 12px;
  margin-top: -15px;
  &:hover {
    background-color: #0041a3; 
  }
`;

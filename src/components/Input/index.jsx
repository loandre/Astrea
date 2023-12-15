import React from "react";
import * as C from "./styles";

const Input = ({ type, placeholder, value, onChange, endAdornment }) => {
  return (
    <C.InputWrapper>
      <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      {endAdornment && <C.EndAdornment>{endAdornment}</C.EndAdornment>}
    </C.InputWrapper>
  );
};

export default Input;

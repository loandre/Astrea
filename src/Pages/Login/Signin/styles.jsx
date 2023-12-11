import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 35px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 415px;
  max-height: 395px;
  padding: 40px;
  border-radius: 8px;
  position: relative;
`;

export const Logo = styled.img`
  width: 80%;
  max-width: 300px;
  margin-bottom: 20px;
`;

export const LabelError = styled.label`
  font-size: 14px;
  color: red;
  height: 20px;
`;

export const ForgotPasswordLink = styled.a`
  color: #003380;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 5px;
  position: center;
  font-weight: bold;
  font-size: 12px;
  &:hover {
    color: #0041a3; 
  }
`;

export const LabelSignup = styled.label`
  font-size: 14px;
  color: #676767;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #003380;
    &:hover {
    color: #0041a3; 
  }
  }
`;

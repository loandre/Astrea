import React, { useState, useEffect, useCallback } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = useCallback(async () => {
    console.log("Iniciando processo de cadastro para:", email);
    const res = await signup(email, "");
    console.log("Resposta do cadastro:", res);
    if (res) {
      setError(res);
    } else {
      navigate("/");
    }
  }, [email, signup, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" && email) {
        handleSignup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [email, handleSignup]);

  return (
    <C.Container>
      <C.Content>
        <C.Logo src="/assets/logo.png" alt="Logo" />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="RECUPERAR SENHA" onClick={handleSignup} />
        <C.LabelSignin>
          <C.Strong>
            <Link to="/">&nbsp;FAZER LOGIN NOVAMENTE</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Recover;

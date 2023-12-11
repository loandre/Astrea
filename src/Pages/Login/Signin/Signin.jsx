import React, { useState, useEffect, useCallback } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = useCallback(async () => {
    console.log("Iniciando processo de login para:", email);
    const res = await signin(email, senha);
    console.log("Resposta do login:", res);
    if (res === true) {
      navigate("/workspace");
    } else {
      setError(res);
    }
  }, [email, senha, signin, navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && email && senha) {
        handleLogin();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [email, senha, handleLogin]);


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
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.LabelError>{error}</C.LabelError>
        <Button Text="ENTRAR" onClick={handleLogin} />
        <C.ForgotPasswordLink as={Link} to="/recover">ESQUECEU SUA SENHA?</C.ForgotPasswordLink>
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;REGISTRE-SE</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;

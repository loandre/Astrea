import React, { useState, useCallback } from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [oab, setOab] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = useCallback(async () => {
    if (!name || !email || !phone || !password || !rg || !cpf || !oab) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      await signup(name, email, phone, password, rg, cpf, oab);
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    } catch (err) {
      setError(err);
    }
  }, [name, email, phone, password, rg, cpf, oab, signup, navigate]);

  return (
    <C.Container>
      <C.Content>
        <C.Logo src="/assets/logo.png" alt="Logo" />
        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="text"
          placeholder="RG"
          value={rg}
          onChange={(e) => setRg(e.target.value)}
        />
        <Input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Input
          type="text"
          placeholder="OAB"
          value={oab}
          onChange={(e) => setOab(e.target.value)}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="INSCREVER-SE" onClick={handleSignup} />
        <C.LabelSignin>
          Já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;ENTRE</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;

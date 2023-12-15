import React, { useState, useCallback } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Box, Typography, Link as MuiLink, Paper } from "@mui/material";
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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "15px",
          width: "100%",
          maxWidth: "415px",
          padding: "40px",
          borderRadius: "8px",
        }}
      >
        <Box
          component="img"
          src="/assets/logo.png"
          alt="Logo"
          sx={{
            width: "80%",
            maxWidth: "300px",
            marginBottom: "20px",
          }}
        />
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
        <Typography variant="body2" color="error">{error}</Typography>
        <Button Text="INSCREVER-SE" onClick={handleSignup} />
        <Typography variant="body2" color="#676767">
          Já tem uma conta?
          <MuiLink
            component={Link}
            to="/"
            sx={{
              color: "#228BE6",
              textDecoration: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              marginTop: "5px",
              "&:hover": {
                color: "#55AAF5",
              },
            }}
          >
            &nbsp;ENTRE
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;

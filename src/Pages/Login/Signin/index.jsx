import React, { useState, useEffect, useCallback } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Box, Typography, Link as MuiLink, Paper, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Login/hooks/useAuth";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("loandre@email.com");
  const [senha, setSenha] = useState("123456");
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
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
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
          endAdornment={
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />
        <Typography variant="body2" color="error">{error}</Typography>
        <Button Text="ENTRAR" onClick={handleLogin} />
        <MuiLink
          component={Link}
          to="/recover"
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
          ESQUECEU SUA SENHA?
        </MuiLink>
        <Typography variant="body2" color="#676767">
          Não tem uma conta?
          <MuiLink
            component={Link}
            to="/signup"
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
            &nbsp;REGISTRE-SE
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signin;

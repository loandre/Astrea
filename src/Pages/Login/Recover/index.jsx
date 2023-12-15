import React, { useState, useEffect, useCallback } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Box, Typography, Link as MuiLink, Paper } from "@mui/material";
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
          maxWidth: "395px",
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
        <Typography variant="body2" color="error">{error}</Typography>
        <Button Text="RECUPERAR SENHA" onClick={handleSignup} />
        <Typography variant="body2" color="#676767">
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
            &nbsp;FAZER LOGIN NOVAMENTE
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Recover;

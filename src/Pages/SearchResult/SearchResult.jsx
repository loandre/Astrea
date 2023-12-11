import React from 'react';
import { Box, Typography } from "@mui/material";

const Workspace = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "590" }}>
        Resultado da busca por
      </Typography>
      {/* Outros componentes ou conteúdo podem ser adicionados aqui */}
    </Box>    
  );
};

export default Workspace;

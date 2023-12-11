import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Menu,
  MenuItem,
  InputAdornment,
  useMediaQuery
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SellIcon from "@mui/icons-material/Sell";
import { createConsulting } from '../../services/consultingAPI';

const Consulting = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:767px)');
  const isMediumScreen = useMediaQuery('(max-width:1022px)');

  const [consultingData, setConsultingData] = useState({
    title: '',
    subject: '',
  });

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultingData({
      ...consultingData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const userIds = [
      "179d0b3e-b0ab-4369-b8b1-4056edcead50",
      "2d181386-ed88-49f1-acb6-a9d26b19cdf0"  
    ];

    const payload = {
      title: consultingData.title,
      subject: consultingData.subject,
      users: userIds.map(id => ({ id }))
    };

    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjliZGNlNWY4LWNjMWItNGU4OC04OWZkLTEzYjU2YTM0MDQ3NCIsImVtYWlsIjoibWFlbGluYUBnbWFpbC5jb20iLCJpYXQiOjE3MDA0MjM5MjZ9.WuqMdTpwEc1MlF7pNw9yj2dlZxUA7B6PM-okY2tOJYo';

    createConsulting(payload, token)
      .then(response => {
        console.log('Atendimento criado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao criar atendimento:', error);
      });
  };

  // Define o estilo para os TextFields
  const textFieldStyle = isMobile || isMediumScreen ? { width: '100%' } : { width: '50%' };

  return (
    <>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "590", flexGrow: 1, marginTop:  "10px", marginLeft: isMobile || isMediumScreen ? 0 : "-22px" }}>
        Adicionar atendimento
      </Typography>

      <Box sx={{ flex: 3, mt: 0.9, ml: isMobile || isMediumScreen ? 0 : -2 }}>
        <Box sx={{ marginBottom: '20px', marginTop:'60px'  }}>
          <Typography color="textPrimary">Clientes*</Typography>
          <TextField
            sx={textFieldStyle}
            placeholder="Digite o nome do cliente"
            name="title"
            onChange={handleInputChange} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography sx={{ color: '#228BE6', cursor: 'pointer' }}>Adicionar cliente</Typography>
        </Box>

        <Box sx={{ marginBottom: '20px' }}>
          <Typography color="textPrimary">Assunto*</Typography>
          <TextField
            sx={textFieldStyle}
            placeholder="Digite um título para o seu atendimento"
            name="subject" 
            onChange={handleInputChange}
          />
        </Box>

        <Box sx={{ marginBottom: '20px', position: 'relative' }}>
          <Typography color="textPrimary">Etiqueta</Typography>
          <IconButton onClick={handleMenuOpen}>
            <SellIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Item 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Item 2</MenuItem>
          </Menu>
        </Box>

        <Box sx={{ marginBottom: '20px' }}>
          <Typography color="textPrimary">Processo, caso ou atendimento</Typography>
          <TextField
            sx={textFieldStyle}
            placeholder="Encontre processo, caso ou atendimento"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ marginBottom: '20px' }}>
          <Typography color="textPrimary">1º Registro do atendimento*</Typography>
          <TextField
            sx={textFieldStyle}
            fullWidth
            multiline
            rows={4}
            placeholder="Insira as anotações referentes ao atendimento"
          />
        </Box>

        <Box sx={{ marginLeft: isMobile || isMediumScreen ? { width: '100%' } : { width: '50%' }  , display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="primary" sx={{ color: '#228BE6' }}>Cancelar</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#228BE6', '&:hover': { backgroundColor: '#206BA4' } }}
            onClick={handleSave} // Chamar a função para enviar os dados quando clicar em "SALVAR"
          >
            SALVAR
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Consulting;

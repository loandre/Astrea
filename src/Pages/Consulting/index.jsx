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
import Header from "../../components/Header";
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
    const payload = {
      title: consultingData.title,
      subject: consultingData.subject,
    };

    createConsulting(payload)
      .then(response => {
        console.log('Atendimento criado com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao criar atendimento:', error);
      });
  };

  const textFieldStyle = { width: isMobile || isMediumScreen ? '100%' : '50%' };

  return (
    <Box m="20px">
      <Header title="Adicionar atendimento" subtitle="Gerencie e registre seus atendimentos" />
      <Box sx={{ flex: 3, mt: 0.9 }}>
        <Box sx={{ marginBottom: '20px', marginTop: '60px' }}>
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
          <Typography sx={{ color: '#228BE6', cursor: 'pointer', mt: 1 }}>Adicionar cliente</Typography>
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

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, width: textFieldStyle.width }}>
          <Button color="primary" sx={{ color: '#228BE6', mr: 2 }}>Cancelar</Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#228BE6', '&:hover': { backgroundColor: '#206BA4' } }}
            onClick={handleSave}
          >
            SALVAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Consulting;

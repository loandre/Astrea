import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Menu,
  MenuItem,
  Divider,
  TextField,
  InputAdornment,
  useMediaQuery
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SellIcon from "@mui/icons-material/Sell";
import SortIcon from "@mui/icons-material/Sort";
import PrintIcon from "@mui/icons-material/Print";
import SearchIcon from "@mui/icons-material/Search";

const Section = ({ title, children, addAction, id }) => {
  const [expanded, setExpanded] = useState(
    JSON.parse(localStorage.getItem(`expanded-${id}`)) ?? true
  );
  useEffect(() => {
    // Salva o estado atual no LocalStorage quando ele mudar
    localStorage.setItem(`expanded-${id}`, JSON.stringify(expanded));
  }, [expanded, id]);

  const handleExpandChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={() => {}}
      sx={{
        border: "0.1px solid #DBDBDB",
        borderRadius: "7px",
        background: "transparent",
        boxShadow: "none",
        mb: 2.5,
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary aria-controls="panel-content" id="panel-header">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>{title}</Typography>
            {addAction && (
              <Tooltip
              title={<div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              Clique para<br />adicionar
            </div>}
              placement="left"
              arrow
              PopperProps={{
                sx: {
                  '& .MuiTooltip-tooltip': {
                    bgcolor: "#202124",
                    maxWidth: 'none', 
                  },
                  '& .MuiTooltip-arrow': {
                    color: "#202124",
                  },
                },
              }}
            >
              <IconButton
                size="small"
                color="primary"
                onClick={(e) => e.stopPropagation()} // Impede a propagação para o Accordion
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'transparent', 
                    '& svg': { color: "#228BE6" },
                  }
                }}
              >
                <AddIcon />
              </IconButton>
            </Tooltip>
            )}
          </Box>
          <Button
            endIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            onClick={handleExpandChange}
            sx={{
              textTransform: "none",
              color: "#626262",
              padding: 0, 
              minWidth: 0,
              ml: 0, 
              mb: -1,
              mt: -0.9,
              cursor: 'pointer' 
            }}
          >
            {expanded ? "Ocultar" : "Expandir"}
          </Button>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

const Workspace = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery('(max-width:767px)');
  const isMediumScreen = useMediaQuery('(max-width:1022px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? 'column' : 'row', mt: 0.5 }}>
      {/* Ajusta a margem superior do contêiner principal */}
      <Box sx={{ flex: 3, mt: 0.5, ml: isMobile ? 0 : -2 }}>
        {/* Ajusta a margem superior e esquerda do contêiner esquerdo */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile || isMediumScreen ? 'column' : 'row',
            justifyContent: isMobile || isMediumScreen ? 'flex-end' : 'space-between',
            alignItems: 'start',
            mb: 4,
          }}
        >
          <Typography variant="h3" component="h1" sx={{ fontWeight: "590", flexGrow: 1 }}>
            Área de trabalho
          </Typography>
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#003380",
                textTransform: "none",
                borderRadius: "7px",
                padding: "8px 15px",
                "&:hover": {
                  bgcolor: "#0550c1",
                  boxShadow: "none",
                },
                boxShadow: "none",
                marginRight: isMobile || isMediumScreen ? 0 : 'auto',
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>ADICIONAR TAREFA</Typography>
            </Button>
            <Tooltip
              arrow
              title="Filtrar etiqueta"
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "#202124",
                  },
                  "& .MuiTooltip-arrow": {
                    color: "#202124",
                  },
                },
              }}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.04)",
                borderRadius: "5px",
                mr: 1.6,
                ml: 1.6,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <IconButton>
                <SellIcon />
              </IconButton>
            </Tooltip>
            {/* <Tooltip
              arrow
              title="Ordenar..."
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "#202124",
                  },
                  "& .MuiTooltip-arrow": {
                    color: "#202124",
                  },
                },
              }}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.04)",
                borderRadius: "5px",
                mr: 1.6,
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <IconButton>
                <SortIcon />
              </IconButton>
            </Tooltip> */}
            {/* <Tooltip
              arrow
              title="Imprimir"
              PopperProps={{
                sx: {
                  "& .MuiTooltip-tooltip": {
                    bgcolor: "#202124",
                  },
                  "& .MuiTooltip-arrow": {
                    color: "#202124",
                  },
                },
              }}
              sx={{
                bgcolor: "rgba(0, 0, 0, 0.04)",
                borderRadius: "5px",
                "&:hover": {
                  bgcolor: "rgba(0, 0, 0, 0.08)",
                },
                mr: 3,
              }}
            >
              <IconButton>
                <PrintIcon />
              </IconButton>
            </Tooltip> */}
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Button
            endIcon={<ArrowDropDownIcon sx={{ ml: -0.5 }} />}
            onClick={handleClick}
            sx={{
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "7px",
              mr: 1,
              mt: 1.6,
              padding: "8px 17px",
              bgcolor: "#F0EFEF",
              color: "#6C757D",
              border: "none",
              "&:hover, &:focus, &:active": {
                bgcolor: "#F0EFEF",
                boxShadow: "none",
              },
            }}
          >
            TODAS AS LISTAS
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              sx: {
                width: 230,
                height: 170,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem
              sx={{
                bgcolor: "transparent",
                "&:hover": {
                  bgcolor: "transparent",
                },
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Encontre uma lista para visualizar"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#228BE6",
                py: 0.4,
                "&:hover": { bgcolor: "#F1F3F4" },
              }}
            >
              Todas as listas
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#228BE6",
                py: 0.4,
                "&:hover": { bgcolor: "#F1F3F4" },
              }}
            >
              Lista de tarefas
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              sx={{
                color: "#228BE6",
                textAlign: "end",
                textDecoration: "none",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                "&:hover": {
                  textDecoration: "underline",
                  bgcolor: "transparent",
                },
              }}
            >
              Gerenciar listas
            </MenuItem>
          </Menu>
        </Box>
        <Typography
          variant="body1"
          sx={{ fontStyle: "italic", mt: 4.5, color: "#6C757D" }}
        >
          Ainda não existem tarefas cadastradas nesta lista.
        </Typography>
      </Box>

      {/*  Lado direito */}
      <Box sx={{ flex: 2.1, mt: 0.5, ml: 0 }}>
        {" "}
        {/* Remove a margem esquerda e ajusta a margem superior do contêiner direito */}
        <Section title="Processos e casos" addAction id="processos-casos">
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            Você ainda não possui processos ou casos cadastrados.
          </Typography>
        </Section>
        <Section title="Estatísticas" addAction id="estatisticas">
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Atendimentos ativos: 3
        </Typography>
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Honorários a faturar: R$ 0,00
        </Typography>
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Despesas a faturar: R$ 0,00
        </Typography>
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Timesheets 30 dias: 0h
        </Typography>
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Documentos 30 dias: 0
        </Typography>
        <Typography sx={{ color: "#003380", my: 0.7, "&:hover": { textDecoration: "underline" }, cursor: 'pointer' }}>
          Históricos 30 dias: 0
        </Typography>
      </Section>
        <Section title="Lembretes" addAction id="lembretes">
        <Typography variant="body2" sx={{ color: "#878787", my: 1 }}>HOJE:</Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#878787", mb: 2 }}>
          Sem compromissos agendados
        </Typography>

        <Typography variant="body2" sx={{ color: "#878787", my: 1 }}>AMANHÃ:</Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#878787", mb: 2 }}>
          Sem compromissos agendados
        </Typography> 

        <Typography variant="body2" sx={{ color: "#878787", my: 1 }}>
          FUTUROS: próximos 5 compromissos
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "#878787", my: 1 }}>
          Sem compromissos agendados
        </Typography>
      </Section>
      </Box>
    </Box>    
  );
};

export default Workspace;

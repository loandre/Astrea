import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import {
  Box,
  IconButton,
  InputBase,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  styled,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Estilo personalizado para Tooltips usando o Material-UI 'styled'
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#202124",
    color: "white",
    fontSize: "0.8rem",
    borderRadius: "4px",
    marginLeft: "0px",
    [`&[data-popper-placement*="bottom"] .MuiTooltip-arrow`]: {
      top: 0,
      "&::before": {
        borderWidth: "0 7px 7px 7px",
        borderColor: `transparent transparent #202124 transparent`,
      },
    },
  },
  [`& .MuiTooltip-arrow`]: {
    color: "#202124",
  },
}));

const Topbar = () => {
  // Hooks para estado local
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const isUserMenuOpen = Boolean(userMenuAnchorEl);
  const [addMenuAnchorEl, setAddMenuAnchorEl] = useState(null);
  const isAddMenuOpen = Boolean(addMenuAnchorEl);
  const [timesheetPopupOpen, setTimesheetPopupOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Hooks para consultas de mídia responsivas
  const isMobile = useMediaQuery("(max-width:766px)");
  const showHamburgerMenu = useMediaQuery("(max-width:1023px)");
  const adjustSearch = useMediaQuery("(max-width:1023px)");

  // Hook de navegação do react-router-dom
  const navigate = useNavigate();

  // Funções de manipulação de eventos
  const handleCloudClick = () => {
    navigate("/pending-search/search-results");
  };
  const handleSearchClick = () => {
    navigate("/search-result/");
  };
  const handleLogoClick = () => {
    navigate("/workspace");
  };
  const handleSettingsClick = () => {
    navigate("/admin/access/");
  };
  const handleAddMenuClose = () => {
    setAddMenuAnchorEl(null);
  };
  const handleUserMenuClose = () => {
    setUserMenuAnchorEl(null);
  };
  const handleTimesheetClick = () => {
    setTimesheetPopupOpen(true);
  };
  const handleClosePopup = () => {
    setTimesheetPopupOpen(false);
  };
  const handleAddClick = (event) => {
    setAddMenuAnchorEl(event.currentTarget);
  };
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchorEl(event.currentTarget);
  };

  // Monitora mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setDrawerOpen(false); // Redefine o estado do menu hambúrguer
      }
    };
    window.addEventListener("resize", handleResize);

    // Limpeza do efeito
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Renderização do componente
  return (
    <Box
      display="flex"
      alignItems="center"
      p={1.4}
      sx={{
        bgcolor: "white",
        boxShadow: "0 2px 4px rgba(112, 112, 112, 0.1)",
        zIndex: 1201,
        // Esconder conteúdo do Topbar quando o Drawer estiver aberto
        visibility: drawerOpen ? "hidden" : "visible",
      }}
    >
      {/* Logo */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/${
          isMobile ? "logo-mobile.png" : "logo.png"
        }`}
        alt="Logo"
        style={{
          width: isMobile ? "28px" : "140px",
          marginLeft: "15px",
          marginRight: isMobile ? "10px" : "150px",
          cursor: "pointer",
        }}
        onClick={handleLogoClick}
      />

      {/* Campo de Pesquisa */}
      <Box
        display="flex"
        alignItems="center"
        sx={{
          width: adjustSearch
            ? "auto"
            : {
                xs: "320px",
                md: `calc(320px + ${
                  (480 - 320) / (1600 - 1050)
                } * (100vw - 1050px))`,
                lg: "480px",
              },
          height: "40px",
          border: "1px solid #F3F3F4",
          borderRadius: "4px",
          boxShadow: "0 2px 4px rgba(93, 93, 93, 0.1)",
          "&:focus-within": {
            borderColor: "#003380",
            boxShadow: "0 2px 4px rgba(0, 92, 168, 0.5)",
          },
          flex: adjustSearch ? 1 : "none",
          marginLeft: { xs: "10px", sm: "-90px", md: "-57px", lg: "-50px" },
          marginRight: adjustSearch ? 1 : "none",
          // Media query para ajustar marginLeft entre 600px e 767px
          "@media screen and (min-width: 600px) and (max-width: 767px)": {
            marginLeft: "10px", // ajuste este valor conforme necessário
          },
        }}
      >
        <InputBase
          sx={{
            ml: 2,
            flex: 1,
            height: "100%",
            color: "#000",
            fontWeight: "bold",
          }}
          placeholder="Pesquisar contato, processo ou tarefa"
        />
        <IconButton
          type="button"
          sx={{
            p: 1,
            color: "#6C757D",
          }}
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Ícones e Nome do Usuário ou Menu Hambúrguer */}
      {showHamburgerMenu ? (
        <Hamburger drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      ) : (
        <Box display="flex" alignItems="center" ml="auto">
          <CustomTooltip title="Adicionar" placement="bottom" arrow>
            <IconButton
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
              }}
              onClick={handleAddClick}
            >
              <AddRoundedIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title="Resultados de buscas" placement="bottom" arrow>
            <IconButton
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
              }}
              onClick={handleCloudClick}
            >
              <CloudDownloadRoundedIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title="Cronômetro timesheet" placement="bottom" arrow>
            <IconButton
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
              }}
              onClick={handleTimesheetClick}
            >
              <WatchLaterOutlinedIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title="Novidades astrea" placement="bottom" arrow>
            <IconButton
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
              }}
            >
              <CardGiftcardRoundedIcon />
            </IconButton>
          </CustomTooltip>
          <CustomTooltip title="Administração" placement="bottom" arrow>
            <IconButton
              onClick={handleSettingsClick}
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
                marginRight: "20px",
              }}
            >
              <SettingsIcon />
            </IconButton>
          </CustomTooltip>
          <Box
            display="flex"
            alignItems="center"
            ml="auto"
            mr={3}
            sx={{
              color: "#424548",
              "&:hover": { color: "#228BE6" },
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleUserMenuOpen}
          >
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              heghbertho gomes
            </Typography>
            <ArrowDropDownIcon />
          </Box>
          {/* Menu suspenso do usuário */}
          <Menu
            anchorEl={userMenuAnchorEl}
            open={isUserMenuOpen}
            onClose={handleUserMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                borderRadius: "6px",
                boxShadow: "1 2px 4px rgba(162, 162, 162, 0.1)",
                minWidth: "140px",
              },
              "& .MuiMenuItem-root": {
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  color: "#228BE6",
                },
              },
            }}
          >
            <MenuItem onClick={handleUserMenuClose}>Meu perfil</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Plano de uso</MenuItem>
            <MenuItem onClick={handleUserMenuClose}>Sair</MenuItem>
          </Menu>
        </Box>
      )}
      {/* Menu suspenso para o botão Adicionar */}
      <Menu
        anchorEl={addMenuAnchorEl}
        open={isAddMenuOpen}
        onClose={handleAddMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "6px",
            boxShadow: "1 2px 4px rgba(162, 162, 162, 0.1)",
          },
          "& .MuiMenuItem-root": {
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              color: "#228BE6",
            },
          },
        }}
      >
        <MenuItem onClick={handleAddMenuClose}>Processo manual</MenuItem>
        <MenuItem onClick={handleAddMenuClose}>
          Processo busca automática
        </MenuItem>
        <MenuItem onClick={handleAddMenuClose}>Caso</MenuItem>
        <MenuItem onClick={handleAddMenuClose}>Atendimento</MenuItem>
        <Divider />
        <MenuItem onClick={handleAddMenuClose}>Tarefa</MenuItem>
        <MenuItem onClick={handleAddMenuClose}>Evento</MenuItem>
        <Divider />
        <MenuItem onClick={handleAddMenuClose}>Contato</MenuItem>
      </Menu>
      <Dialog
        open={timesheetPopupOpen}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleClosePopup();
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "6px",
            boxShadow: "none",
            width: "100%",
            maxWidth: "620px",
            pt: 1.5,
            pb: 1.5,
            pr: 1,
            pl: 1, // padding-left
          },
          "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0,0,0,0.7)",
          },
        }}
      >
        <DialogContent>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "600" }}>
            Dê o próximo passo na gestão do seu escritório
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Essa funcionalidade é exclusiva dos planos Up, Smart, Company e Vip.
            Faça um upgrade e desbloqueie recursos como recebimento automático
            de publicações, gestão financeira e controle de prazos para evoluir
            ainda mais a sua advocacia.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClosePopup}
            sx={{ color: "#202020", "&:hover": { color: "#424242" } }}
          >
            DEIXAR PARA DEPOIS
          </Button>
          <Button
            onClick={handleClosePopup}
            variant="contained"
            sx={{
              backgroundColor: "#228BE6",
              "&:hover": { backgroundColor: "#3DA9FC" },
            }}
          >
            CONHECER PLANOS
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Topbar;

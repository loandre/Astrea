import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  InputBase,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  styled,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import useAuth from "../../Login/hooks/useAuth";

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

const menuItems = [
  { title: "Área de trabalho", icon: <FormatListBulletedIcon />, path: "/workspace" },
  { title: "Agenda", icon: <EventAvailableOutlinedIcon />, path: "/schedule" },
  { title: "Contatos", icon: <PersonOutlineOutlinedIcon />, path: "/contacts" },
  { title: "Atendimentos", icon: <ChatBubbleOutlineRoundedIcon />, path: "/consulting" },
  { title: "Processos e casos", icon: <FolderOutlinedIcon />, path: "/folders" },
  { title: "Publicações", icon: <DescriptionOutlinedIcon />, path: "/clippings" },
  { title: "Financeiro", icon: <AttachMoneyOutlinedIcon />, path: "/financial" },
  { title: "Documentos", icon: <AttachFileOutlinedIcon />, path: "/documents" },
  { title: "Indicadores", icon: <ShowChartOutlinedIcon />, path: "/dashboard-module" },
  { title: "Alertas", icon: <NotificationsNoneOutlinedIcon />, path: "/alerts" },
];

const userMenuItems = [
  { title: "Meu perfil" },
  { title: "Plano de uso" },
  { title: "Sair" },
];

const addMenuItems = [
  "Processo manual",
  "Processo busca automática",
  "Caso",
  "Atendimento",
  "Tarefa",
  "Evento",
  "Contato",
];

const Topbar = () => {
  const { signout } = useAuth();
  const [userMenuAnchorEl, setUserMenuAnchorEl] = useState(null);
  const isUserMenuOpen = Boolean(userMenuAnchorEl);
  const [addMenuAnchorEl, setAddMenuAnchorEl] = useState(null);
  const isAddMenuOpen = Boolean(addMenuAnchorEl);
  const [timesheetPopupOpen, setTimesheetPopupOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:766px)");
  const showHamburgerMenu = useMediaQuery("(max-width:1023px)");
  const adjustSearch = useMediaQuery("(max-width:1023px)");

  const handleMenuOpen = (event, setter) => setter(event.currentTarget);
  const handleMenuClose = (setter) => setter(null);

  const handleLogout = () => {
    signout();
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) setDrawerOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (path) => navigate(path);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        p={1.4}
        sx={{
          bgcolor: "white",
          boxShadow: "0 2px 4px rgba(112, 112, 112, 0.1)",
          zIndex: 1201,
          visibility: drawerOpen ? "hidden" : "visible",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/${isMobile ? "logo-mobile.png" : "logo.png"}`}
          alt="Logo"
          style={{
            width: isMobile ? "28px" : "140px",
            marginLeft: "15px",
            marginRight: isMobile ? "10px" : "150px",
            cursor: "pointer",
          }}
          onClick={() => handleClick("/workspace")}
        />
        <Box
          display="flex"
          alignItems="center"
          sx={{
            width: adjustSearch ? "auto" : { xs: "320px", md: `calc(320px + ${(480 - 320) / (1600 - 1050)} * (100vw - 1050px))`, lg: "480px" },
            height: "40px",
            border: "1px solid #F3F3F4",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(93, 93, 93, 0.1)",
            "&:focus-within": { borderColor: "#003380", boxShadow: "0 2px 4px rgba(0, 92, 168, 0.5)" },
            flex: adjustSearch ? 1 : "none",
            marginLeft: { xs: "10px", sm: "-90px", md: "-57px", lg: "-50px" },
            marginRight: adjustSearch ? 1 : "none",
            "@media screen and (min-width: 600px) and (max-width: 767px)": { marginLeft: "10px" },
          }}
        >
          <InputBase sx={{ ml: 2, flex: 1, height: "100%", color: "#000", fontWeight: "bold" }} placeholder="Pesquisar contato, processo ou tarefa" />
          <IconButton type="button" sx={{ p: 1, color: "#6C757D" }} onClick={() => handleClick("/search-result/")}>
            <SearchIcon />
          </IconButton>
        </Box>
        {showHamburgerMenu ? (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)} sx={{ marginLeft: "auto" }}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center" ml="auto">
            <CustomTooltip title="Adicionar" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" } }}
                onClick={(event) => handleMenuOpen(event, setAddMenuAnchorEl)}
              >
                <AddRoundedIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Resultados de buscas" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" } }}
                onClick={() => handleClick("/pending-search/search-results")}
              >
                <CloudDownloadRoundedIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Cronômetro timesheet" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" } }}
                onClick={() => setTimesheetPopupOpen(true)}
              >
                <WatchLaterOutlinedIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Novidades astrea" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" } }}
              >
                <CardGiftcardRoundedIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Administração" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" }, marginRight: "20px" }}
                onClick={() => handleClick("/admin/access/")}
              >
                <SettingsIcon />
              </IconButton>
            </CustomTooltip>
            <Box
              display="flex"
              alignItems="center"
              ml="auto"
              mr={3}
              sx={{ color: "#424548", "&:hover": { color: "#228BE6" }, display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={(event) => handleMenuOpen(event, setUserMenuAnchorEl)}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Loandre Campos
              </Typography>
              <ArrowDropDownIcon />
            </Box>
          </Box>
        )}
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ ".MuiDrawer-paper": { width: "100vw", height: "100vh", boxShadow: "none" } }}
      >
        <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: "#F1F3F4", boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)" }}>
          <Toolbar variant="dense" sx={{ justifyContent: "flex-end" }}>
            <CustomTooltip title="Adicionar" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#000000", "&:hover": { bgcolor: "#DEE2E6", color: "#000000", borderRadius: "6px" } }}
                onClick={(event) => handleMenuOpen(event, setAddMenuAnchorEl)}
              >
                <AddRoundedIcon />
              </IconButton>
            </CustomTooltip>
            <CustomTooltip title="Resultados de buscas" placement="bottom" arrow>
              <IconButton
                sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" }, mr: 2 }}
                onClick={() => handleClick("/pending-search/search-results")}
              >
                <CloudDownloadRoundedIcon />
              </IconButton>
            </CustomTooltip>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "#6C757D", "&:hover": { bgcolor: "#DEE2E6", color: "#202124", borderRadius: "6px" } }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box role="presentation" onClick={() => setDrawerOpen(false)} onKeyDown={() => setDrawerOpen(false)} sx={{ width: "auto" }}>
          <List sx={{ py: 1.5, ".MuiListItem-root": { padding: "6.3px 23px" }, ".MuiListItemIcon-root": { color: "#6C6C6C" }, ".MuiListItemText-primary": { color: "#646464", fontWeight: 520 } }}>
            {menuItems.map((item) => (
              <ListItem button component={RouterLink} to={item.path} onClick={() => setDrawerOpen(false)} key={item.title}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} sx={{ ml: -2.5 }} />
              </ListItem>
            ))}
            <Divider sx={{ my: 1, mb: 2 }} />
            <ListItem button component={RouterLink} to="/support" onClick={() => setDrawerOpen(false)} sx={{ mb: 2, display: "flex", alignItems: "center" }}>
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <Box sx={{ display: "flex", alignItems: "center", ml: -2.5 }}>
                <ListItemText primary="Suporte" />
                <CustomTooltip
                  title={
                    <span>
                      Um <b>espaço de conteúdo exclusivo e gratuito</b> para você se <b>aprofundar com os conhecimentos do Astrea</b>, com dicas dadas por especialistas da Aurum.
                    </span>
                  }
                  placement="right"
                  arrow
                >
                  <IconButton size="small" sx={{ color: "#0062FF", ml: 1 }}>
                    <InfoIcon />
                  </IconButton>
                </CustomTooltip>
              </Box>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            {userMenuItems.map((item) => (
              <Typography
                key={item.title}
                sx={{
                  padding: "6.3px 23px",
                  color: "#228BE6",
                  my: 0.2,
                  fontWeight: 440,
                  "&:hover": { textDecoration: "underline" },
                  cursor: "pointer",
                }}
                onClick={item.title === "Sair" ? handleLogout : () => handleMenuClose(setUserMenuAnchorEl)}
              >
                {item.title}
              </Typography>
            ))}
          </List>
        </Box>
      </Drawer>
      <Menu
        anchorEl={addMenuAnchorEl}
        open={isAddMenuOpen}
        onClose={() => handleMenuClose(setAddMenuAnchorEl)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": { borderRadius: "6px", boxShadow: "1 2px 4px rgba(162, 162, 162, 0.1)" },
          "& .MuiMenuItem-root": { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)", color: "#228BE6" } },
        }}
      >
        {addMenuItems.map((item) => (
          <MenuItem key={item} onClick={() => handleMenuClose(setAddMenuAnchorEl)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={userMenuAnchorEl}
        open={isUserMenuOpen}
        onClose={() => handleMenuClose(setUserMenuAnchorEl)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiPaper-root": { borderRadius: "6px", boxShadow: "1 2px 4px rgba(162, 162, 162, 0.1)", minWidth: "140px" },
          "& .MuiMenuItem-root": { "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)", color: "#228BE6" } },
        }}
      >
        {userMenuItems.map((item) => (
          <MenuItem key={item.title} onClick={item.title === "Sair" ? handleLogout : () => handleMenuClose(setUserMenuAnchorEl)}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
      <Dialog
        open={timesheetPopupOpen}
        onClose={(event, reason) => { if (reason !== "backdropClick") setTimesheetPopupOpen(false); }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiDialog-paper": { borderRadius: "6px", boxShadow: "none", width: "100%", maxWidth: "620px", pt: 1.5, pb: 1.5, pr: 1, pl: 1 },
          "& .MuiBackdrop-root": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <DialogContent>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "600" }}>
            Dê o próximo passo na gestão do seu escritório
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Essa funcionalidade é exclusiva dos planos Up, Smart, Company e Vip. Faça um upgrade e desbloqueie recursos como recebimento automático de publicações, gestão financeira e controle de prazos para evoluir ainda mais a sua advocacia.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setTimesheetPopupOpen(false)} sx={{ color: "#202020", "&:hover": { color: "#424242" } }}>
            DEIXAR PARA DEPOIS
          </Button>
          <Button
            onClick={() => setTimesheetPopupOpen(false)}
            variant="contained"
            sx={{ backgroundColor: "#228BE6", "&:hover": { backgroundColor: "#3DA9FC" } }}
          >
            CONHECER PLANOS
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Topbar;

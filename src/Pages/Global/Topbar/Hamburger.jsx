import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  AppBar,
  Toolbar,
  styled,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import { Link as RouterLink } from "react-router-dom";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "white",
    color: "black",
    fontSize: "1rem",
    borderRadius: "4px",
    boxShadow: theme.shadows[1],
    width: "259px",
    height: "170px",
    padding: theme.spacing(1),
    wordWrap: "break-word",
    wordBreak: "break-word",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  [`& .MuiTooltip-arrow`]: {
    backgroundColor: "white",
  },
}));

const Hamburger = ({ drawerOpen, toggleDrawer, handleCloudClick }) => {
  const [addMenuAnchorEl, setAddMenuAnchorEl] = useState(null);
  const isAddMenuOpen = Boolean(addMenuAnchorEl);

  const handleAddClick = (event) => {
    setAddMenuAnchorEl(event.currentTarget);
  };

  const handleAddMenuClose = () => {
    setAddMenuAnchorEl(null);
  };
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          ".MuiDrawer-paper": {
            width: "100vw",
            height: "100vh",
            boxShadow: "none",
          },
        }}
      >
        <AppBar
          position="static"
          color="default"
          elevation={1}
          sx={{
            bgcolor: "#F1F3F4",
            boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.2)",
          }}
        >
          <Toolbar variant="dense" sx={{ justifyContent: "flex-end" }}>
            <Tooltip
              title="Adicionar"
              placement="bottom"
              arrow
              sx={{ fontWeight: "bold" }}
            >
              <IconButton
                sx={{
                  color: "#000000",
                  "&:hover": {
                    bgcolor: "#DEE2E6",
                    color: "#000000",
                    borderRadius: "6px",
                  },
                }}
                onClick={handleAddClick}
              >
                <AddRoundedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Resultados de buscas" placement="bottom" arrow>
              <IconButton
                sx={{
                  color: "#6C757D",
                  "&:hover": {
                    bgcolor: "#DEE2E6",
                    color: "#202124",
                    borderRadius: "6px",
                  },
                  mr: 2,
                }}
                onClick={handleCloudClick}
              >
                <CloudDownloadRoundedIcon />
              </IconButton>
            </Tooltip>
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleDrawer}
              sx={{
                color: "#6C757D",
                "&:hover": {
                  bgcolor: "#DEE2E6",
                  color: "#202124",
                  borderRadius: "6px",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
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
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{ width: "auto" }}
        >
          <List
            sx={{
              py: 1.5,
              ".MuiListItem-root": { padding: "6.3px 23px" },
              ".MuiListItemIcon-root": { color: "#6C6C6C" },
              ".MuiListItemText-primary": { color: "#646464", fontWeight: 520 },
            }}
          >
            <ListItem
              button
              component={RouterLink}
              to="/workspace"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <ListItemText primary="Área de trabalho" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/calendar"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <EventAvailableOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Agenda" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/contacts"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contatos" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/consulting"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <ChatBubbleOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Atendimentos" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/folders"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <FolderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Processos e casos" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/clippings"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Publicações" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/financial"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <AttachMoneyOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Financeiro" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/documents"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <AttachFileOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Documentos" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/dashboard-module"
              onClick={toggleDrawer}
            >
              <ListItemIcon>
                <ShowChartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Indicadores" sx={{ ml: -2.5 }} />
            </ListItem>
            <ListItem
              button
              component={RouterLink}
              to="/alerts"
              onClick={toggleDrawer}
              sx={{ mb: 5 }}
            >
              <ListItemIcon>
                <NotificationsNoneOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Alertas" sx={{ ml: -2.5 }} />
            </ListItem>
            <Divider sx={{ my: 1, mb: 2 }} />
            <ListItem
              button
              component={RouterLink}
              to="/support"
              onClick={toggleDrawer}
              sx={{ mb: 2, display: "flex", alignItems: "center" }}
            >
              <ListItemIcon>
                <HelpOutlineOutlinedIcon />
              </ListItemIcon>
              <Box sx={{ display: "flex", alignItems: "center", ml: -2.5 }}>
                <ListItemText primary="Suporte" />
                <CustomTooltip
                  title={
                    <span>
                      Um <b>espaço de conteúdo exclusivo e gratuito</b> para
                      você se <b>aprofundar com os conhecimentos do Astrea</b>,
                      com dicas dadas por especialistas da Aurum.
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
            <Typography
              sx={{
                padding: "6.3px 23px",
                color: "#228BE6",
                my: 0.2,
                fontWeight: 440,
                "&:hover": { textDecoration: "underline" },
                cursor: "pointer",
              }}
            >
              Administração
            </Typography>
            <Typography
              sx={{
                padding: "6.3px 23px",
                color: "#228BE6",
                my: 0.2,
                fontWeight: 440,
                "&:hover": { textDecoration: "underline" },
                cursor: "pointer",
              }}
            >
              Meu perfil
            </Typography>
            <Typography
              sx={{
                padding: "6.3px 23px",
                color: "#228BE6",
                my: 0.2,
                fontWeight: 440,
                "&:hover": { textDecoration: "underline" },
                cursor: "pointer",
              }}
            >
              Plano de uso
            </Typography>
            <Typography
              sx={{
                padding: "6.3px 23px",
                color: "#228BE6",
                my: 0.2,
                fontWeight: 440,
                "&:hover": { textDecoration: "underline" },
                cursor: "pointer",
              }}
            >
              Sair
            </Typography>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Hamburger;

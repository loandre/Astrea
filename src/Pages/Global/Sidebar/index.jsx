import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProSidebar, Menu } from "react-pro-sidebar";
import { Box, useMediaQuery, Divider } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";
import SidebarItem from "./SidebarItem";
import SupportItem from "./SupportItem";

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

const routeToTitleMap = {
  "/workspace": { title: "Área de Trabalho", icon: <FormatListBulletedIcon /> },
  "/schedule": { title: "Agenda", icon: <EventAvailableOutlinedIcon /> },
  "/contacts": { title: "Contatos", icon: <PersonOutlineOutlinedIcon /> },
  "/consulting": {
    title: "Atendimentos",
    icon: <ChatBubbleOutlineRoundedIcon />,
  },
  "/folders": { title: "Processos e casos", icon: <FolderOutlinedIcon /> },
  "/clippings": { title: "Publicações", icon: <DescriptionOutlinedIcon /> },
  "/financial": { title: "Financeiro", icon: <AttachMoneyOutlinedIcon /> },
  "/documents": { title: "Documentos", icon: <AttachFileOutlinedIcon /> },
  "/dashboard-module": {
    title: "Indicadores",
    icon: <ShowChartOutlinedIcon />,
  },
  "/alerts": { title: "Alertas", icon: <NotificationsNoneOutlinedIcon /> },
};

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width:1022px)");
  const [selected, setSelected] = useState("Dashboard");
  const location = useLocation();

  useEffect(() => {
    const currentRoute = location.pathname;
    const currentTitle = routeToTitleMap[currentRoute]?.title || "Dashboard";
    setSelected(currentTitle);
  }, [location]);

  if (isMobile) {
    return null; // Não renderiza a sidebar se a tela for menor que 1022px
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `white !important`,
          width: "240px",
          borderRight: "1px solid #E0E0E0",
          position: "fixed",
          height: "100%",
          zIndex: 2,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
          position: "relative",
        },
        "& .pro-menu-item": {
          borderRadius: "6px",
          position: "relative",
          "&::before": {
            borderRadius: "6px",
            content: '""',
            position: "absolute",
            left: 20,
            right: 20,
            top: 3,
            bottom: 3,
            backgroundColor: "transparent",
            zIndex: -1,
            transition: "background-color 0.3s",
          },
          "&:hover::before": {
            backgroundColor: "#e5e5e5", // Cor do hover
            borderRadius: "6px",
          },
          "&.active::before": {
            backgroundColor: "transparent",
          },
          "&:hover": {
            "& .pro-icon-wrapper": {
              color: "black !important",
            },
          },
          "&:hover .pro-inner-item": {
            color: "black !important",
          },
        },
      }}
    >
      <ProSidebar>
        <Menu iconShape="square">
          <Box sx={{ height: "10px" }}></Box>
          {Object.entries(routeToTitleMap).map(([path, { title, icon }]) => (
            <SidebarItem
              key={path}
              title={title}
              to={path}
              icon={icon}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
          <Divider style={{ margin: "20px 0" }} />
          <SupportItem selected={selected} setSelected={setSelected} />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;

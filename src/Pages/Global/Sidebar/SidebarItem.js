import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: `#4e4e4e`,
        paddingLeft: "0.1em",
        marginBottom: "-0.3em",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Box display="flex" alignItems="center">
        <Typography>{title}</Typography>
      </Box>
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }} />
    </MenuItem>
  );
};

export default SidebarItem;

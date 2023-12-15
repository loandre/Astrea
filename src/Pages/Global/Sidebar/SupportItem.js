import React from 'react';
import { MenuItem } from 'react-pro-sidebar';
import { Box, Typography, IconButton, Tooltip, styled } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import { useNavigate } from 'react-router-dom';

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
    height: "160px",
    padding: theme.spacing(2.5),
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

const SupportItem = ({ selected, setSelected }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelected("Suporte");
    navigate("/support");
  };

  const isSelected = selected === "Suporte";
  const itemColor = isSelected ? "#000000" : "#242424";

  return (
    <MenuItem
      active={isSelected}
      onClick={handleClick}
      icon={
        <HelpOutlineOutlinedIcon style={{ color: `#4e4e4e` }} />
      }
    >
      <Box display="flex" alignItems="center">
        <Typography variant="body1" sx={{ flexGrow: 1, color: itemColor }}>
          Suporte
        </Typography>
        <CustomTooltip
          title={
            <span>
              Um <b>espaço de conteúdo exclusivo e gratuito</b> para você se{" "}
              <b>aprofundar com os conhecimentos do Astrea</b>, com dicas dadas
              por especialistas da Aurum.
            </span>
          }
          placement="right"
          arrow
        >
          <IconButton size="small" sx={{ color: "#0062FF" }}>
            <InfoIcon />
          </IconButton>
        </CustomTooltip>
      </Box>
    </MenuItem>
  );
};

export default SupportItem;

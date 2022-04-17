import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    left: 5,
    top: 0,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 2px",
  },
}));

export default function CartBadge() {
  return (
    <StyledBadge badgeContent={4} color="secondary">
      <ShoppingCartOutlinedIcon />
    </StyledBadge>
  );
}

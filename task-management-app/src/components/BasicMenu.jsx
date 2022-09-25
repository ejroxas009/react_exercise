import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Link } from "react-router-dom";

export default function BasicMenu({ onLogout }) {
  const loginContext = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "white", color: "gray", fontWeight: "bold" }}>
          {loginContext.user.username.substring(0, 1).toUpperCase()}
        </Avatar>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/user">
          Dashboard
        </MenuItem>

        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

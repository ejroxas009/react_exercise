import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { UserContext } from "../Context/UserContext";
import { LoginContext } from "../Context/LoginContext";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import BasicMenu from "./BasicMenu";

const NavbarComponent = () => {
  const userContext = useContext(UserContext);
  const loginContext = useContext(LoginContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
    localStorage.clear();
    loginContext.onSetUser({});
    loginContext.onLoginForm({
      username: "",
      password: "",
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#101820FF" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management App
          </Typography>

          <BasicMenu onLogout={handleLogout} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarComponent;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function ButtonAppBar({ totalCount }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce
          </Typography>

          <Badge badgeContent={totalCount} color="error" overlap="circular">
            <IconButton
              size="large"
              aria-label="shopping cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

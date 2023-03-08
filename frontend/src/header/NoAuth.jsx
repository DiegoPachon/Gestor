import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function NoAuth() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" href="login">
            Inicio
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

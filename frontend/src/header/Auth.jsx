import React from "react";
import Button from "@mui/material/Button";
import "./Header.css";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const Auth = ({ onLogout }) => {
  return (
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
    <div className="Inicio">
      <link
        href="https://cdn.lineicons.com/3.0/lineicons.css"
        rel="stylesheet"
      ></link>
      <main>
          <Button variant="contained" href="usuarios" >
            <i className="lni lni-consulting"></i>
            USUARIOS
          </Button>
          <Button variant="contained" href="caja" >
            <i className="lni lni-revenue"></i>
            CAJA
          </Button>
            <Button variant="contained" href="productos" >
              <i className="lni lni-apple"></i>
              PRODUCTOS
            </Button>
            <Button variant="contained" href="listarfacturas" >
            <i className="lni lni-notepad"></i>
            Facturas
          </Button>
          <Button variant="contained" href="login" onClick={onLogout}>
            Sign Out
          </Button>
      </main>
    </div>
    </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Auth;

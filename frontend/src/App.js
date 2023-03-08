import React from "react";
import { Routes, Route } from "react-router-dom";
import "boxicons";
import Login from "./login/Login";
import Header from "./header/index";
import { CrearUsuario, ListarUsuarios } from "./usuarios/components";
import { AuthProvider, ProtectedRoute } from "./auth/components";
import {
  Menu,
  ListarProductos,
  CrearProducto,
  Caja,
  Carrito,
  CarProvider,
  ListarFacturas
} from "./productos/components";

import "./App.css";

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<Menu />} />
          <Route path="login" element={<Login />} />
          <Route
            path="usuarios"
            element={
              
              <ListarUsuarios />
              
            }
          />
          <Route
            path="caja"
            element={
              
              <CarProvider>
                <Carrito />
                <Caja />
              </CarProvider>
              
              
            }
          />
          <Route path="productos" element={<ListarProductos /> } />
          <Route path="crearusuario" element={<CrearUsuario />} />
          <Route path="crearproducto" element={<CrearProducto />} />
          <Route path="listarfacturas" element={<ListarFacturas />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;

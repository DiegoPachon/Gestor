import React, { useState} from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../auth/Auth";
import "./Login.css";
import logo  from "../recursos/logo.png";
import Alert from '@mui/material/Alert';

const Login = () => {
  const { onLogin } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
 
  return (  
    <div className="Login">
      <div className="Izq">
      <title className="Title">Bienvenido</title>
      <h1 className="Description">Lo mejor de la sasón, está en el sabor</h1>
      </div>
      <div className="Cajas">
      <img className="Imagen"
          src={logo}/>
        <form className="Form" onSubmit={handleSubmit(onLogin)}>
          <div className="col-auto">
            <label htmlFor="user" className="visually-hidden">
              User
            </label>
            <input
              type="email"
              autoComplete="off"
              className="form-control form-control-lgl"
              placeholder="Email"
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
             {errors.email && <Alert severity="error"> {errors.email.message}</Alert>}

          </div>
          <hr />{" "}
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            className="form-control form-control-lgl"
            placeholder="Contraseña"
            {...register("password", {
              required: "invalid password",
              message: "invalid password",
            })}
          />      
          { errors.password && <Alert severity="error"> {errors.password.message}</Alert>}
          <hr /> 
          <button type="submit" className="btn btn-success" disabled={!errors}>
            Iniciar Sesión
          </button>
          </form>
      </div>
    </div>
    
  );
};

export default Login;

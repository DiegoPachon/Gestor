import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import URLBackend from "../../backendPath";
import "./CrearUsuario.css";
import { useRef } from "react";

const CrearUsuario = () => {
  const {
    handleSubmit,
    register,
    formState: { errors}
  } = useForm();
const [name, setName]=useState("");
const inputRef = useRef(null);

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", values.email);
    formData.append("password", values.password);
   
    axios
      .post(`${URLBackend}/user`, {
        name: name,
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
        console.log(values);
      })
      .catch((res) => {
        console.log(res.response.data);
      });
  };
  const errorStyle = {
    color: 'red',
  };

  return (
    <div className="CrearUsuario">
      <NavLink to="/usuarios">
        <Button className="btn btn-secondary">Volver a usuarios</Button>
      </NavLink>
      <div className="caja">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">Nuevo Usuario</div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Nombre
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              placeholder="Nombre"
              autoComplete="off"
              value={name.replace(/[^a-zA-Z]/gi, '')}
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lgl"
              placeholder="Email"
              autoComplete="off"
              ref={inputRef} 
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
      
                },
              })}
            />
          </div>
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Contraseña
            </label>
            <input
              type="password"
              autoComplete="off"
              className="form-control form-control-lgl"
              placeholder="Contraseña"
              {...register("password")}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <button type="submit" className="btn btn-success">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearUsuario;

import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import URLBackend from "../../backendPath";
import "./CrearProducto.css";

const CrearProducto = () => {
  const { handleSubmit, register} = useForm();

  const onSubmit = (values) => {
    const formData = new FormData();
    formData.append("image", values.file[0]);
    formData.append("price", values.price);
    formData.append("name", values.name);
    formData.append("description", values.description);
    formData.append("category", "Desayunos");

    axios
      .post(`${URLBackend}/product`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((res) => {
        console.log(res.response.data);
      });
  };

  return (
    <div className="CrearProducto">
      <NavLink to="/productos">
        <Button className="btn btn-secondary">Volver a productos</Button>
      </NavLink>
      <div className="caja">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <div className="title">Nuevo Producto</div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Nombre
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Nombre"
              {...register("name", {
                required: "Required",
              })}
            />
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <label htmlFor="user" className="visually-hidden">
              Precio
            </label>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Precio"
              {...register("price", {
                required: "Required",
              })}
            />
            {/* <div id="Espacio"></div>
            <input
              type="text"
              className="form-control form-control-lgl"
              id=""
              placeholder="Descripción"
              {...register("description", {
                required: "Required",
              })}
            /> */}
          </div>
          <div id="Espacio"></div>
          <div className="forma">
            <input
              type="file"
              className="imagenes"
              maxLength={10000000}
              {...register("file")}
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

export default CrearProducto;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getProducts, deleteProducts } from "../requests";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listarProductos.css";

const ListarProductos = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const productsDB = await getProducts();
      setProducts(productsDB);
    }
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await deleteProducts(id);
    const product = await getProducts();
    setProducts(product);
  };
  return (
    <>
      <Container>
        <br />
        <NavLink to="../crearproducto">
          <button type="submit" className="btn btn-success">
            Insertar Producto
          </button>
        </NavLink>

        <br />
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoria</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.name}</td>
                <td>{elemento.price}</td>
                <td>{elemento.category}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(elemento.id)}
                    type="button"
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ListarProductos;

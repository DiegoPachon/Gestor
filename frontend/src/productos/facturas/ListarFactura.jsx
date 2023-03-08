import {React ,useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";
import {getInvioice, deleteInvoices } from "../requests";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ListarFacturas = () => {

  const [facturas, setFacturas] = useState([]);

  useEffect(() => {
    async function fetchFacturas() {
      const invoiceDB = await getInvioice();
      setFacturas(invoiceDB);
    }
    fetchFacturas();
  }, []);

  const deleteInvoice = async (id) => {
    await deleteInvoices(id);
    const invioce = await getInvioice();
    setFacturas(invioce);
  };
  return (
      <Container>
        <br />
        <Table>
          <thead>
            <tr>
              <th>Total</th>
              <th>tip</th>
            </tr>
          </thead>
          <tbody>
            {facturas.map((elemento) => (
              <tr key={elemento.id}>
                <td>{elemento.total}</td>
                <td>{elemento.tip}</td>
                <td>
                  <button
                    onClick={() => deleteInvoice(elemento.id)}
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
  );
};

export default ListarFacturas;

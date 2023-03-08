import axios from "axios";
import URLBackend from "../backendPath";

//Productos

const getProducts = () => {
  return axios
    .get(`${URLBackend}/product?offset=0&limit=30`)
    .then((response) => {
      return response.data.products;
    })
    .catch((res) => {
      console.log(res.response.data);
    });
};

const deleteProducts = (id) => {
  return axios
    .delete(`${URLBackend}/product/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      console.log(res);
      return res.data;
    });
};

//Facturas

const getInvioice = () => {
  return axios
    .get(`${URLBackend}/invoice`)
    .then((response) => {
      console.log(response);
      return response.data.invoices;
    })
    .catch((res) => {
      console.log(res.response.data);
    });
};
const deleteInvoices = (id) => {
  return axios
    .delete(`${URLBackend}/invoice/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      console.log(res);
      return res.data;
    });
};
export { getProducts, deleteProducts, getInvioice, deleteInvoices };

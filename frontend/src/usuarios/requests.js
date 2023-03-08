import axios from "axios";
import URLBackend from "../backendPath";

const delUsers = (id) => {
  return axios
    .delete(`${URLBackend}/user/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((res) => {
      return res.data;
    });
};

const getUsers = () => {
  return axios
    .get(`${URLBackend}/user`)
    .then((response) => {
      return response.data.users;
    })
    .catch((res) => {
      return res.data;
    });
};

export { delUsers, getUsers };

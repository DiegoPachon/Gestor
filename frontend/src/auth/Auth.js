import { createContext, useContext } from "react";
import axios from "axios";
import URLBackend from "../backendPath";

const Authentication = (email, password) => {
  return axios
    .post(`${URLBackend}/login`, {
      email,
      password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((response) => {
      console.log(response);
      return response.response.data;
    });
};

const AuthContext = createContext(null);

const useAuth = () => {
  return useContext(AuthContext);
};

export { Authentication, AuthContext, useAuth };

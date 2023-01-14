import axios from "axios";
import UserService from "./userservice";

const API_URL = "http://localhost:3001/";

const register = (username, password) => {
  return axios.post(API_URL + "register", {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("users");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
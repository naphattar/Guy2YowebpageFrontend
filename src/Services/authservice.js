import axios from "axios";
import UserService from "./userservice";

const API_URL = "https://guy2-yowebpage-backend.vercel.app/";

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
      if (response.status === 201 && response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((err) =>{
      console.log(err);
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
import axios from "axios";

const API_URL = "http://localhost:3001/";


const updateUser = (username,newscore) =>{
    return axios.put(API_URL + "updateuserscore",{
        username,
        newscore,
    });
}

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user");
};

const UserService = {
  getPublicContent,
  getUserBoard,
  updateUser
}

export default UserService;
import axios from "axios";

const API_URL = "http://localhost:3001/";


const updateUserscore = (username,newscore) =>{
    return axios.put(API_URL + "updateuserscore",{
        username,
        newscore,
    })
    .then((response) =>{
      console.log("test updateUser ",response);
      if(response.data.username){
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
      
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
  updateUserscore,
}

export default UserService;
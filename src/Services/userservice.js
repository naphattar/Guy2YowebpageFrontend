import axios from "axios";

const API_URL = "https://guy2-yowebpage-backend.vercel.app/";


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


// to get all users data
const getUsersBoard = () => {
  return axios.get(API_URL + "users")
  .then((response) =>{
    console.log(response);
    localStorage.setItem("users", JSON.stringify(response.data));
    return response.data;
  });

};

const UserService = {
  getPublicContent,
  getUsersBoard,
  updateUserscore,
}

export default UserService;
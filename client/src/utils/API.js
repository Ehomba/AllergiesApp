import axios from "axios";

export default {
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function(userRegister) {
    console.log("Axios saveUser");
    return axios.post("/api/register", userRegister);
  }
};

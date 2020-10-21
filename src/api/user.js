import axios from "axios";

const UserApi = {
  createUser: async (user) => {
    await axios.post("http://localhost:8080/users", user);
  },

  getUser: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};

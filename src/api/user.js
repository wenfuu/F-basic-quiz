import axios from "axios";

// TODO GTB-知识点: - 没有把UserApi export出去
// TODO GTB-知识点: - Promise的使用不正确：这里应该是返回promise就好了，然后在调用这个api的地方使用async/await

const UserApi = {
  createUser: async (user) => {
    await axios.post("http://localhost:8080/users", user);
  },

  getUser: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};

import axios from "axios";

// TODO GTB-知识点: - 没有把UserApi export出去
// TODO GTB-知识点: - Promise的理解不到位，你这里都没有把你的API结果return出去，所以你resolve出去的是一个undefined

const UserApi = {
  createUser: async (user) => {
    await axios.post("http://localhost:8080/users", user);
  },
  // TODO GTB-工程实践: - 方法名叫getUser,调用的API却是拿到education
  getUser: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};

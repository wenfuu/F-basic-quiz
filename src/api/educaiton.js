import axios from "axios";

// TODO GTB-知识点: - 没有把EducationApi export出去
// TODO GTB-知识点: - Promise的使用不正确：这里应该是返回promise就好了，然后在调用这个api的地方使用async/await
const EducationApi = {
  createEducation: async (id, education) => {
    await axios.post(`http://localhost:8080/users/${id}/education`, education);
  },

  getEducation: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};


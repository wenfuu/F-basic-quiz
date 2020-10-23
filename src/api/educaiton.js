import axios from "axios";

// TODO GTB-知识点: - 没有把EducationApi export出去
const EducationApi = {
  createEducation: async (id, education) => {
    await axios.post(`http://localhost:8080/users/${id}/education`, education);
  },

  getEducation: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};


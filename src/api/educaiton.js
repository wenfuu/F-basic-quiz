import axios from "axios";

const EducationApi = {
  createEducation: async (id, education) => {
    await axios.post(`http://localhost:8080/users/${id}/education`, education);
  },

  getEducation: async (id) => {
    await axios.get(`http://localhost:8080/users/${id}/education`);
  },
};

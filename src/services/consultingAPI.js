import axios from 'axios';

const API_BASE_URL = 'https://api.lawer.app';

export const createConsulting = (consultingData, token) => {
  return axios.post(`${API_BASE_URL}/service`, consultingData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

import axios from 'axios';

const BASE_URL = `http://localhost:3000`

class Base {
  async get(endpoint, params = {}) {
    return await axios.get(`${BASE_URL}${endpoint}`, params)
  }

  async delete(endpoint) {
    return await axios.delete(`${BASE_URL}${endpoint}`, {});
  }

  async post(endpoint, payload) {
    return await axios.post(`${BASE_URL}${endpoint}`, payload);
  }

  async patch(endpoint, payload) {
    return await axios.patch(`${BASE_URL}${endpoint}`, payload);
  }
};

export default new Base();
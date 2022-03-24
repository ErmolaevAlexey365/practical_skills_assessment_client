import axios from "axios";

export const API_URL = "http://localhost:5000";

export const managerAPI = {
  getServices() {
    return axios.get(`${API_URL}/home`).then(response => response.data);
  },
  getPricing(name) {
    return axios.get(`${API_URL}/service/${name}`).then(response => response.data);
  },
  postPurchase(body) {
    return axios.post(`${API_URL}/checkout`, body).then(response => response.data);
  },
};


import axios from 'axios';

const API_URL = 'http://localhost:5000';

const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data.token;
  } catch (error) {
    throw error.response.data.message;
  }
};

const logout = () => {
  // Remove the token from local storage
  localStorage.removeItem('token');
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  logout,
};
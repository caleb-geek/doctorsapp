import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/';

const register = (firstname, lastname, username, email, password,roleId) => axios.post(`${API_URL}api/v1/users`, {
  firstname,
  lastname,
  username,
  email,
  password,
  roleId,
})
  .then(response => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response;
  });

const login = (email, password) => axios
  .post(`${API_URL}api/v1/users/login`, {
    email,
    password,
  })
  .then(response => {
    if (response.data.jwt) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};

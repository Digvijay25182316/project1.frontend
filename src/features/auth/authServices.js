import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/";

// Register user
const register = async (formData) => {
  const response = await axios.post(API_URL + "register", formData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;

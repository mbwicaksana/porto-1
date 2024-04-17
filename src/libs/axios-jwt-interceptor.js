import axios from "axios";
import jwtDecode from "jwt-decode";

const axiosJWT = axios.create();

const refreshToken = async (
  setToken,
  setExpire,
  navigate,
  refreshUrl = "http://localhost:5000/token",
) => {
  try {
    const response = await axios.get(refreshUrl); // Replace with your refresh token endpoint
    setToken(response.data.accessToken);
    const decoded = jwtDecode(response.data.accessToken);
    setExpire(decoded.exp);
  } catch (error) {
    console.error("Error refreshing token:", error);
    if (error.response && error.response.status === 401) {
      navigate("/"); // Redirect to login on unauthorized access
    }
  }
};

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date().getTime();
    const token = localStorage.getItem("jwt"); // Retrieve token from local storage (replace with your storage mechanism)

    if (token && currentDate * 1000 < expire * 1000) {
      return config;
    }

    await refreshToken(setToken, setExpire, navigate);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error("Error refreshing token:", error);
    if (error.response && error.response.status === 401) {
      navigate("/"); // Redirect to login on unauthorized access
    }
    return Promise.reject(error);
  },
);

export { axiosJWT, refreshToken };

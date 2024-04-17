import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date().getTime();
      if (expire * 1000 < currentDate) {
        const response = await axios.get("http://localhost:5000/token");
        const accessToken = response.data.accessToken;
        const decoded = jwtDecode(accessToken);

        config.headers.Authorization = `Bearer ${accessToken}`;

        setToken(accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      console.error("Error refreshing token:", error);
      if (error.response && error.response.status === 401) {
        navigate("/");
      }
      return Promise.reject(error);
    },
  );

  const handleGetUsers = async () => {
    try {
      const response = await axiosJWT.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    const refreshTokenAndRedirect = async () => {
      try {
        const tokenResponse = await axios.get("http://localhost:5000/token");
        const { accessToken } = tokenResponse.data;
        const decoded = jwtDecode(accessToken);

        setToken(accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);

        if (!decoded.role || decoded.role !== "admin") {
          navigate("/");
        }
      } catch (error) {
        console.error("Error refreshing token or checking role:", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };

    refreshTokenAndRedirect();
  }, [token, expire, navigate]);

  return (
    <>
      <h1>Hey {name}!</h1>
      <button onClick={handleGetUsers}>Get Users</button>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Main;

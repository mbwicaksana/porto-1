import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

// Main component functional component
const Main = () => {
  // State variables to manage user data and token
  const [name, setName] = useState(""); // User's name
  const [token, setToken] = useState(""); // Access token for API requests
  const [expire, setExpire] = useState(""); // Timestamp for token expiration
  const [users, setUsers] = useState([]); // Array to store fetched user data
  const navigate = useNavigate(); // Function for navigation

  // Create an axios instance with an interceptor to refresh token if needed
  const axiosJWT = axios.create();

  // Interceptor for axios requests to refresh token before making a request
  axiosJWT.interceptors.request.use(
    async (config) => {
      // Get current time in milliseconds
      const currentDate = new Date().getTime();

      // Check if token is about to expire (expire time is in seconds)
      if (expire * 1000 < currentDate) {
        // Refresh token by fetching a new one from the server
        const response = await axios.get("http://localhost:5000/token");

        // Update the access token in the axios instance's headers
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;

        // Update the local state with the new token and user information
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }

      // Return the modified config object
      return config;
    },
    (error) => {
      // Handle errors during token refresh
      console.error("Error refreshing token:", error);

      // If the error indicates an unauthorized access, redirect to login page
      if (error.response && error.response.status === 401) {
        navigate("/");
      }

      // Return the error for further processing
      return Promise.reject(error);
    },
  );

  // Function to fetch users from the API
  const handleGetUsers = async () => {
    try {
      // Make a GET request to the '/users' endpoint using the axiosJWT instance
      const response = await axiosJWT.get("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the access token in the headers
        },
      });

      // Update the users state with the fetched user data
      setUsers(response.data);
    } catch (error) {
      // Handle errors during user data fetching
      console.error("Error fetching users:", error);
    }
  };

  // useEffect hook to run on component mount and when dependencies change
  useEffect(() => {
    // Define an async function to refresh the token
    const refreshToken = async () => {
      try {
        // Fetch a new access token from the server
        const response = await axios.get("http://localhost:5000/token");

        // Update the local state with the new token and user information
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      } catch (error) {
        // Handle errors during token refresh
        console.error("Error refreshing token:", error);

        // If the error indicates an unauthorized access, redirect to login page
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };

    // Call the refreshToken function on component mount
    refreshToken();
  }, [token, expire, navigate]); // Dependencies array to trigger on token, expire, or navigate changes

  // Return the JSX structure for the component
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

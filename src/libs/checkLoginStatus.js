import axios from "axios";

const checkLoginStatus = async (setIsLoggedIn) => {
  try {
    const response = await axios.get("http://localhost:5000/token"); // Assuming protected route for token check
    // Check for access token in response
    if (response.data.accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false); // Handle case where token is missing or invalid
    }
  } catch (error) {
    console.error("Error checking login status:", error);
    setIsLoggedIn(false); // Set to false on errors for safety
  }
};

export default checkLoginStatus;

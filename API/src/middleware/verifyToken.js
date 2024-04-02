/*
Middleware function to verify JWT token.
It extracts the token from the Authorization header, decodes it, 
and sets the decoded email as a property of the request object.
If the token is missing or invalid, it sends a 401 Unauthorized response.

Dependencies:
- jwt: JSON Web Token library for Node.js
- dotenv: Loads environment variables from a .env file

Usage:
- Add this middleware to routes that require authentication.

@param {Object} req - The request object.
@param {Object} res - The response object.
@param {Function} next - The next middleware function in the request-response cycle.
@return {Function} - Calls the next middleware function or sends a 401 response if token is missing or invalid.
*/

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const verifyToken = async (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // If token is missing, send 401 Unauthorized response
  if (token == null) return res.sendStatus(401);

  // Verify the token with the secret key
  jwt.verify(token, process.env.REFRESH_TOKEN, (error, decoded) => {
    // If there's an error verifying the token, send 401 Unauthorized response
    if (error) {
      console.error("Error verifying token:", error);
      return res.sendStatus(401); // Change status to 401 for consistency
    }

    // Set decoded email as a property of the request object
    req.email = decoded.email;

    // Move to the next middleware function
    next();
  });
};

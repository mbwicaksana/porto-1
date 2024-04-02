import React, { useEffect, useState } from "react";
import Main from "../components/Panel/Main";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  // useEffect(() => {
  //   refreshToken();
  // }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      const accessToken = response.data.accessToken;
      const decoded = jwtDecode(accessToken);

      setToken(accessToken);
      setName(decoded.name);
      console.log(decoded);
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Main />
      <h1>Hey {name}!</h1>
      <button className="rounded-lg bg-slate-50 p-3" onClick={refreshToken}>
        Token Check
      </button>
    </>
  );
};

export default Panel;

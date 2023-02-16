import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import NavBar from "../components/global/navbar";
import Sidebar from "../components/global/sidebar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      // console.log(parseRes);
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getName();
  }, []);

  return (
    <Box>
      <Box>
        <NavBar username={name} setAuth={setAuth} />
      </Box>
      <Box>
        <Sidebar />
      </Box>
      {/* <Box m="200px 200px 200px 200px">{name}</Box> */}
    </Box>
  );
};

export default Dashboard;

import React, { useState } from "react";
import bgImg from '../images/tech.jpg';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../components/navbar/Header';
import DrawerComp from '../components/navbar/Drawer';
import '../pages/loginform.css'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";



export default function LoginForm({ setAuth }) {

    // const { register, handleSubmit, watch, formState: { errors } } = useForm()
    // const onSubmit = data => console.log(data);

      // ADDING CODE FOR AUTHENTICATION PURPOSE

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      // console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Login successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  // END OF AUTHENTICATION CODE


    // console.log(watch('username'));
    
  return (
    <Box sx={{ background: "#0f0c29" }}>
      <Box>
        <Header />
      </Box>
      <Box>
        <DrawerComp />
      </Box>
      <Box className="App">
        {/* <div></div> */}
        <Box className="register">
          <Box className="col-1">
            <h2>Log In</h2>
            <span>login and enjoy the service</span>

            <form id="form" className="flex flex-col" onSubmit={onSubmitForm}>
              <input
                required
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => onChange(e)}
              />

              <input
                required
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => onChange(e)}
              />

              {/* <Button to="/dashboard" component={RouterLink} className="btn">
                Log In
              </Button> 
              

              onClick={() => setAuth(true)}
              */}
              <Button className="btn" type="submit">
                Log In
              </Button>
            </form>
            <Link to="/register">Don't have account ? Register</Link>
          </Box>
          <Box className="col-2">
            <img src={bgImg} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
    
  )
}
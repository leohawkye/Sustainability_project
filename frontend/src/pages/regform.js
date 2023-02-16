import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { toast } from "react-toastify";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Box } from "@mui/material";
import Header from "../components/navbar/Header";
import DrawerComp from "../components/navbar/Drawer";
import { Link, Route } from "react-router-dom";

const RegForm = ({ setAuth }) => {
  {
    /*Adding some code here for authentication purpose */
  }

  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, phone, email, password, confirm } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, phone, email, password, confirm };
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      //   console.log(parseRes);
      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
        toast.success("Registered successfully");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  {
    /*end of authentication code */
  }

  const paperStyle = {
    padding: "30px 20px",
    width: 400,

    margin: "20px auto",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#063970" };
  const marginTop = { marginTop: 40 };

  // `${8 * 2}px` = '16px'

  return (
    <Box sx={{ background: "#0f0c29" }}>
      <Box>
        <Header />
      </Box>
      <Box>
        <DrawerComp />
      </Box>
      {/*Uncomment the below code to revert to original  */}
      {/* <Grid margin={marginTop}>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Username' placeholder="Enter your Username" />
                    <TextField fullWidth label='Company Name' placeholder="Enter your Company Name" />
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Address' placeholder="Enter your Address" />
                    <TextField fullWidth label='Email' placeholder="Enter your Email"/>                   
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button to='/dashboard' component={Link} type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid> */}

      {/*Experiment Code to test authentication */}

      <Grid margin={marginTop} container direction={"column"}>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}></Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={onSubmitForm} style={{ gap: "20px", margin: "25px" }}>
            <TextField
              fullWidth
              label="Username"
              name="name"
              type="text"
              placeholder="Enter your Username"
              value={name}
              onChange={(e) => onChange(e)}
            />

            <TextField
              fullWidth
              type="text"
              name="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => onChange(e)}
            />
            <TextField
              fullWidth
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => onChange(e)}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => onChange(e)}
            />
            <TextField
              fullWidth
              type="password"
              name="confirm"
              label="Confirm Password"
              placeholder="Confirm your password"
              value={confirm}
              onChange={(e) => onChange(e)}
            />
            <br></br>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: "100%" }}
            >
              Sign up
            </Button>
          </form>
          <Link to="/login">Already have account? Login</Link>
        </Paper>
      </Grid>
    </Box>
  );
};

export default RegForm;

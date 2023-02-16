import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import RegForm from './pages/regform';
import UserDetails from './pages/userdetails';
import PetrolSc1 from './pages/energyscope1/petrol/petrolsc1';
import { Box } from '@mui/system';
import Dashboard from './pages/dashboard';
import AcetyleneSc1 from './pages/energyscope1/acetylene1/acetylenesc1';
import BmcgSc1 from './pages/energyscope1/bmcg1/bmcgsc1';
import CngSc1 from './pages/energyscope1/cng1/cngsc1';
import LpgSc1 from './pages/energyscope1/lpg1/lpgsc1';
import PngSc1 from './pages/energyscope1/png1/pngsc1';
import HsdSc1 from './pages/energyscope1/hsdc1/hsdsc1';
import Carousal from './pages/Carousal';
import LoginForm from './pages/loginform';
import Environment from './pages/env';
import LinkProject from './pages/linkproject';
import PetrolAdd from './pages/energyscope1/petrol/petroladd';
import Hsd1Add from './pages/energyscope1/hsdc1/hsd1add';
import Acetylene1Add from './pages/energyscope1/acetylene1/acetylene1add';
import Bmcg1Add from './pages/energyscope1/bmcg1/bmcg1add';
import Lpg1Add from './pages/energyscope1/lpg1/lpg1add';
import Cng1Add from './pages/energyscope1/cng1/cng1add';
import Png1Add from './pages/energyscope1/png1/png1add';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Product from './pages/Product';

function App() {
//exp

// const [name, setName] = useState("");

// async function getName() {
//   try {
//     const response = await fetch("http://localhost:5000/dashboard/", {
//       method: "GET",
//       headers: { token: localStorage.token },
//     });
//     const parseRes = await response.json();
//     // console.log(parseRes);
//     setName(parseRes.user_name);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// useEffect(() => {
//   getName();
// }, []);

// exp end














  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      // console.log(parseRes);
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    isAuth();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  return (
    <Box>
      <ToastContainer/>
      <Routes>
              {/* <Route path="/" element={<Carousal/>} /> */}
              <Route path="/" element={<Carousal />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <LoginForm setAuth={setAuth} />
            ) : (
              <Navigate replace to={"/dashboard"} />
            )
          }
        />
        <Route
          path="/register"
          element={
            !isAuthenticated ? (
              <RegForm setAuth={setAuth} />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Navigate replace to={"/login"} />
            )
          }
        />









              <Route path="/env" element={<Environment/>} />        
              {/* <Route path="/loginform" element={<LoginForm/>} /> */}
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
              <Route path="/userdetails" element={<UserDetails/>} />
              {/* <Route path="/regform" element={<RegForm/>} /> */}
              <Route path="/petrolsc1" element={<PetrolSc1/>} />
              <Route path="/acetylenesc1" element={<AcetyleneSc1/>} />
              <Route path="/bmcgsc1" element={<BmcgSc1/>} />
              <Route path="/cngsc1" element={<CngSc1/>} />
              <Route path="/hsdsc1" element={<HsdSc1/>} />
              <Route path="/lpgsc1" element={<LpgSc1/>} />
              <Route path="/pngsc1" element={<PngSc1/>} />
              <Route path="/linkproject" element={<LinkProject/>} />
              <Route path="/petroladd" element={<PetrolAdd/>} />
              <Route path="/hsd1add" element={<Hsd1Add/>} />
              <Route path="/acetylene1add" element={<Acetylene1Add/>} />
              <Route path="/bmcg1add" element={<Bmcg1Add/>} />
              <Route path="/lpg1add" element={<Lpg1Add/>} />
              <Route path="/cng1add" element={<Cng1Add/>} />
              <Route path="/png1add" element={<Png1Add/>} />
              <Route path="/Product" element={<Product/>} />
              <Route path="/Aboutus" element={<Aboutus/>} />
              <Route path="/Contactus" element={<ContactUs/>} />
                                    
          </Routes>
    </Box>
  );
}

export default App;

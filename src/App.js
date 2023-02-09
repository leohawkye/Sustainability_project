import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/global/navbar';
import RegForm from './pages/regform';
import UserDetails from './pages/userdetails';
import NavTabs from './components/global/tab'
import EnergyScope1 from './pages/energyscope1';

function App() {
  return (
    <div className="App">
      <EnergyScope1/>
      
      <Routes>
              <Route path="/userdetails" element={<UserDetails/>} />
              <Route path="/regform" element={<RegForm/>} />
              <Route path="/tab" element={<NavTabs/>} />
              
          </Routes>
      {/* <UserDetails/> */}
      {/* <Navbar/> */}
      {/* <RegForm/> */}
    </div>
  );
}

export default App;

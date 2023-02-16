import * as React from 'react';
import {Box} from '@mui/material';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';
import {Link} from 'react-router-dom';



// function LinkTab(props) {
//   return (
//     <Tab 
//       component={Link}
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

export default function Tabenergysc1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const handleClick = (event) => {
  //   event.preventDefault();
  // }

  return (
    <Box  color= 'white' sx={{bgcolor: "#063970" ,p: 1 }}>
      <Tabs
      responsive
        centered
        value={value}
        wrapped
        onChange={handleChange} 
        aria-label="nav tabs example" 
        textColor="white"
        indicatorColor="nocolr">
        <Tab  label="PETROL" component= {Link} to="/petrolsc1" />
        <Tab  label="HSD" component= {Link} to="/hsdsc1" />
        <Tab label="LPG" component= {Link} to="/lpgsc1" />
        <Tab label="ACETYLENE" component= {Link} to="/acetylenesc1" />
        <Tab label="CNG" component= {Link} to="/cngsc1" />
        <Tab label="PNG" component= {Link} to="/pngsc1" />
        <Tab label="BMCG" component= {Link} to="/bmcgsc1" />
      </Tabs>
    </Box>
  );
}

// import React from 'react'
// import { Box } from '@mui/system'

// const Tabenergyscp1 = () => {
//   return (
//     <Box display='space-around'>
//       <button>Petrol</button>
//       <button>hsd</button>
//       <button>lpg</button>
//       <button>actelyene</button>
//       <button>Bmcg</button>
//       <button>cng</button>
//     </Box>
    
//   )
// }

// export default Tabenergyscp1
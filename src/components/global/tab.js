import * as React from 'react';
import {Box} from '@mui/material';
import {Tabs} from '@mui/material';
import {Tab} from '@mui/material';


function LinkTab(props) {
  return (
    <Tab 
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box m='250px' color= 'white' sx={{bgcolor: "#063970" ,p: 1 }}>
      <Tabs 
        centered
        value={value}
        wrapped
        onChange={handleChange} 
        aria-label="nav tabs example" 
        textColor="white"
        indicatorColor="secondary">
        <LinkTab label="PETROL" href="/drafts" />
        <LinkTab label="HSD" href="/trash" />
        <LinkTab label="LPG" href="/spam" />
        <LinkTab label="ACETYLENE" href="/drafts" />
        <LinkTab label="CNG" href="/trash" />
        <LinkTab label="PNG" href="/spam" />
        <LinkTab label="BMCG" href="/spam" />
       
      </Tabs>
    </Box>
  );
}
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Sidebar from '../components/global/sidebar';
import NavBar from '../components/global/navbar';
import { Link } from 'react-router-dom';
import {MenuItem} from '@mui/material';

export default function UserDetails() {

  const ics = [
    {
      value: 'USD',
      label: 'SWC',
    },
    {
      value: 'EUR',
      label: 'WET',
    },
    {
      value: 'BTC',
      label: 'HCI',
    },
    {
      value: 'JPY',
      label: 'ISD',
    },
  ];

  return (
    <Box>
      <Box>
        <NavBar/>
      </Box>
       <Box height='20vh'>
      <Sidebar/>
      </Box>
      <Box m='-20px 120px 120px 320px'
      sx={{backgroundColor:"#063970", borderRadius:'16px'}}>
      <Typography sx={{backgroundColor:"#063970"}} 
        textAlign='center'>USER DETAILS</Typography>
      </Box>
      
      <Box
      width='900px'
      m='-10px 120px 120px 320px'
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', backgroundColor:'white' },
        }}
        noValidate
        autoComplete="on"
        
      >
        <div>
          
          <TextField
            required
            id="outlined-required"
            label='Username'
            placeholder="Enter your Username"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Access Type'
            placeholder="Enter your Username"
          
          />
          <TextField
          id="outlined-select-currency"
          select
          label="Select your Department"
         
        >
          {ics.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          <TextField
            required
            id="outlined-required"
            label='Contact number'
            placeholder="Enter Contact number"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Email'
            placeholder="Primary"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Address'
            placeholder="Enter your Address"
            
          />
        </div>
        <Box mt='20px' ml='8px'  >
        <Button  sx={{backgroundColor:'orange', color:'white'}} type='submit'  variant='contained' >Add Details</Button> &nbsp;
        <Button to='/linkproject' component={Link} sx={{backgroundColor:'green', color:'white'}} type='submit' variant='contained' >Link Project</Button>
        </Box>
        
      </Box>
    </Box>
   
  );
}


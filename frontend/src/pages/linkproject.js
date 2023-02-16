import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import Sidebar from '../components/global/sidebar';
import NavBar from '../components/global/navbar';


const LinkProject = () => {
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
      <Typography sx={{backgroundColor:"#063970"}} textAlign='center'>LINK PROJECT</Typography>
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
            label='IC'
            placeholder="IC"
            
          />
          <TextField
            required
            id="outlined-required"
            label='SBG'
            placeholder="SBG"
            
          />
          <TextField
            required
            id="outlined-required"
            label='BU'
            placeholder="BU"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Segment'
            placeholder="Segment"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Cluster'
            placeholder="Cluster"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Project'
            placeholder="Project"
            
          />
          <TextField
            required
            id="outlined-required"
            label='Location'
            placeholder="Location"
          />
          <TextField
            required
            id="outlined-required"
            label='Project Code/Cost Code'
            placeholder="Project Code/Cost Code"
          />
        </div>
        <Box mt='20px' ml='8px'>
        <Button type='submit' variant='contained' sx={{backgroundColor:'orange', color:'white' }} >Add Project</Button> &nbsp;
        </Box>
        
      </Box>
    </Box>
  )
}

export default LinkProject


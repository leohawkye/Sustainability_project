import React from 'react';
import {Card} from '@mui/material';
import {CardContent} from '@mui/material';
import {Typography, Box} from '@mui/material';


const UserDetails = () => {

  return (
    <>
    <Box mt='94px' className='container'>
    <Typography variant="h5" component="h2" color= 'white' backgroundColor="#063970">
          User Details
        </Typography>
    </Box>
    <Box>
    <Card >      
      <CardContent>
        <Typography variant="h7" component="h7">
          Username :
        </Typography>
        <Typography  variant="h7" component="p">
          Access Type :
        </Typography>
        <Typography variant="h7" component="p">
          Department : 
        </Typography>
        <Typography variant="h7" component="p">
          Contact No :
        </Typography>
        <Typography variant="h7" component="p">
          Address :
        </Typography>
      </CardContent>
    </Card>
    </Box>
    </>
    
  );
};

export default UserDetails;

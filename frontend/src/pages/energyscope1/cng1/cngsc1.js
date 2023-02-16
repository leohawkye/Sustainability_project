import React from 'react'
import { Box } from '@mui/system'
import NavBar from '../../../components/global/navbar'
import Tabenergyscp1 from '../tabenergyscp1'
import Sidebar from '../../../components/global/sidebar'
import Cng1Table from './cng1table'



const CngSc1 = () => {
  return (
    <Box>
      <Box height='75vh'>
        <Sidebar/>
        </Box>
        <Box>
        <NavBar/>
        </Box>
        <Box height='10vh' width='70%' m='-350px 20px 20px 320px'>
          <Tabenergyscp1/>
        </Box> 
        <Box align="center" sx={{mt:'5%', ml:'2%'}}>
        <Box m='20px 20px 20px 220px' sx={{color:'black'}}>
          <h2>CNG</h2>
        </Box> 
          <Cng1Table/>
        </Box>
    </Box>
  )
}

export default CngSc1



import React from 'react'
import { Box } from '@mui/system'
import NavBar from '../../../components/global/navbar'
import Tabenergyscp1 from '../tabenergyscp1'
import Sidebar from '../../../components/global/sidebar'
import Hsd1Table from './hsd1table'



const HsdSc1 = () => {
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
          <h2>HSD</h2>
        </Box> 
          <Hsd1Table/>
        </Box>
    </Box>
  )
}

export default HsdSc1



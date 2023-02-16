import React from 'react';
import Header from '../components/navbar/Header';
import { Box } from '@mui/system';

const Aboutus=()=>{
return(
     <div>
        <Header/>
          <div className="container">
             <div className="row justify-content-md-center">
                 <div className='col-xs-6'>
                    <h1>About Us</h1>
                    <Box height='60vh' width='60%'
                    m='40px 200px 200px 200px'
                     sx={{color:'black'}}>
                        <h1>About Us</h1>
                    Environmental, social, and corporate governance (ESG) became the buzzword this year with companies gearing up to comply with Business responsibility and Sustainable Reporting (BRSR), which will kick in from FY23. This has triggered a major change in the way several large companies conduct their businesses. The given Portal will ease the compliance requirement by bringing in the data that were either gone uncaptured or not consolidated fully in absence of any proper platform and data being in multiple silos for generation of report supplemented with bringing out insights through bringing out analytics
                    </Box>
                    
                </div>
             </div>
         </div>
     </div>
)
 }
 export default Aboutus;
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Product.css';
import img1 from "../images/energy1.png"
import img2 from "../images/water.jpg"
import img3 from "../images/waste.jpg"
import { Box } from '@mui/system';
import Header from '../components/navbar/Header';


export default function Product() {
  return (

    <div >
      <Box>
        <Header />
      </Box>
      <Box className="product" m='130px 50px 50px 50px'>
    <Card sx={{ width: "400px", backgroundColor:'aliceblue' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img1}
        title="green iguana"
      />
      <CardContent>
        <Typography color='primary' textAlign ='center' gutterBottom variant="h5" component="div" >
          ESG
        </Typography>
      </CardContent>
      <CardActions className='cardaction' >
      <Button size="large">More</Button>
      </CardActions>
    </Card>
    <Card sx={{ width: "400px", backgroundColor:'aliceblue' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img2}
        title="Water"
      />
      <CardContent>
        <Typography color='primary' textAlign ='center' gutterBottom variant="h5" component="div">
          BRSR
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button size="large">More</Button>
      </CardActions>
    </Card>

    <Card sx={{ width: "400px", backgroundColor:'aliceblue' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img3}
        
      />
      <CardContent>
        <Typography color='primary' textAlign ='center' gutterBottom variant="h5" component="div">
          OTHERS
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button size="large">More</Button>
      </CardActions>
    </Card>

    {/* <Card sx={{ width: "400px", backgroundColor:'aliceblue' }}>
      <CardMedia
        sx={{ height: 300 }}
        image={img1}
        
      />
      <CardContent>
        <Typography color='primary' textAlign ='center' gutterBottom variant="h5" component="div">
          D
        </Typography>
        
      </CardContent>
      <CardActions>
      <Button size="large" text-align="center">More</Button>
        
      </CardActions>
    </Card> */}
    </Box>
    </div>
    
  );
}

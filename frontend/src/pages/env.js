import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import NavBar from "../components/global/navbar";
import Sidebar from "../components/global/sidebar";
import { Link as RouterLink } from "react-router-dom";
import "./env.css";
import img1 from "../images/energy1.png"
import img2 from "../images/water.jpg"
import img3 from "../images/waste.jpg"
import img4 from "../images/others1.jpg"


export default function Environment() {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Box>
        <Sidebar />
      </Box>
      <Box className="item">
        <Card sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={img1}
            title=""
          />
          <CardContent>
            <Typography
              color="primary"
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              ENERGY
            </Typography>
          </CardContent>
          <CardActions className="cardaction">
            <Button to="/petrolsc1" component={RouterLink} size="large">
              Scope 1
            </Button>
            <Button size="large">Scope 2</Button>
            <Button size="large">Scope 3</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={img2}
            title="green iguana"
          />
          <Button  style={{ fontSize: '1.5rem', padding: '2rem 7rem',}}>
          <CardContent sx={{textAlign:'center'}} >
          
            WATER 
            
          </CardContent>
          </Button>
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={img3}
            title="green iguana"
          />
          <Button style={{ fontSize: '1.5rem', padding: '2rem 7rem'}}>
          <CardContent sx={{textAlign:'center'}} >
          
              WASTE
            
          </CardContent>
          </Button>   
        </Card>

        <Card sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={img4}
            title="green iguana"
          />
          <Button  style={{ fontSize: '1.5rem', padding: '2rem 7rem',}}>
          <CardContent sx={{textAlign:'center'}} >
          
              OTHERS
            
          </CardContent>
          </Button>
        </Card>
      </Box>
    </Box>
  );
}

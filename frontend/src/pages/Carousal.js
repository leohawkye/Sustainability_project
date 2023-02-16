import React, { useState } from "react";
import '../pages/Carousal.css'
import { images } from "./CarousalData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/system'
import Header from "../components/navbar/Header";
import DrawerComp from "../components/navbar/Drawer";

function Carousal() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <Box >
      <Box>
        <DrawerComp/>
      </Box>
      <Box>
        <Header/>
      </Box>
      <Box style={{
          width: "100%",
          height: "700px",
          
        }}>
      <Box
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <Box
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </Box>
        <Box className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </Box>
        <Box
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </Box>
      </Box>
    </Box>



    </Box>
    
  );
}

export default Carousal;
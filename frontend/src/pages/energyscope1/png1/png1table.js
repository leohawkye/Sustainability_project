import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Button } from "@mui/material";
import {Box} from "@mui/material";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';




const Png1Table = () => {
  const [pet, setPet] = useState([]);

  //delete todo function

  const deletePet = async id => {
    try {
      const deletePet = await fetch(`http://localhost:5000/png/${id}`, {
        method: "DELETE"
      });

      setPet(pet.filter(pet => pet.sr_no !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPet = async () => {
    try {
      const response = await fetch("http://localhost:5000/png");
      const jsonData = await response.json();

      setPet(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  console.log(pet);

  return (
    <Fragment>
      {" "}
      <table className="table" border='1' width= "90%">
        <thead>
          <tr color="black">
            
            <th>PERIOD (FROM)</th>
            <th>PERIOD (TO)</th>
            <th>CATEGORY</th>
            <th>QUANTITY</th>
            <th>UNIT OF MEASUREMENT</th>
            <th>REMOVE</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {pet.map(p => (
            <tr align='center' key={p.sr_no}>
              <td>{p.pfrom}</td>
              <td>{p.pto}</td>
              <td>{p.cty}</td>
              <td>{p.qty}</td>
              <td>{p.uom}</td>
              <td>
                <IconButton 
                  onClick={() => deletePet(p.sr_no)}
                >
                  <DeleteForeverRoundedIcon/>
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Box m='50px 50px 50px 210px'  >
      <Button variant='contained'
        sx={{backgroundColor:'green', color:'white'}}  
        to ='/png1add' component={Link}>
          Add
        </ Button>
      </Box>
      
    </Fragment>
  );
};

export default Png1Table;


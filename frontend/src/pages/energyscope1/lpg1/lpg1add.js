import { Button } from "@mui/material"; 
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import Sidebar from "../../../components/global/sidebar";
import NavBar from "../../../components/global/navbar";

const Lpg1Add = () => {
  const [pfrom, setPfrom] = useState("");
  const [pto, setPto] = useState("");
  const [cty, setCty] = useState("");
  const [qty, setQty] = useState("");
  const [uom, setUom] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { pfrom,pto,cty,qty,uom };
      const response = await fetch("http://localhost:5000/lpg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/lpgsc1";
      console.log(response)
    } catch (err) {
      console.error(err.message);
    }
  };



  return (
    <Box>
      <Box height='75vh'>
        <Sidebar/>
        </Box>
        <Box>
        <NavBar/>
        </Box>
    <Box ml='600px' mt='-200px' >
      <Box sx={{color:'black'}}>
      <h2> Details on Consumption of Lpg</h2>
      </Box>
    <form onSubmit={onSubmitForm}>
        <div className='p_form'>
            <div className='field'>
                <label>Period From</label>
                <input type="text" name="pfrom" className="form-control"
          value={pfrom} onChange={e => setPfrom(e.target.value)} />
            </div>
            <div className='field'>
                <label>Period To</label>
                <input type="text" name="pto" className="form-control"
          value={pto}
          onChange={e => setPto(e.target.value)}/>
            </div>
            <div className='field'>
                <label>Category</label>
                <input type="text" name="cty" value={cty}
          onChange={e => setCty(e.target.value)}/>
            </div>
            <div className='field'>
                <label>Quantity</label>
                <input type="text" name="qty" value={qty}
          onChange={e => setQty(e.target.value)}/>
            </div>
            <div className='field'>
                <label>Unit of Measurement</label>
                <input type="text" name="uom" value={uom}
          onChange={e => setUom(e.target.value)}/>
            </div>
            <Button type='submit' variant='contained'>Submit</Button>
        </div>
    </form>
    </Box>
    </Box>
  )
}

export default Lpg1Add;


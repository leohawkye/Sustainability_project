const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

app.use("/", require("./routes/jwtAuth"));

app.use("/dashboard", require("./routes/dashboard"));

//post petrol

app.post("/petrol", async (req, res) => {
    try {
      const { pfrom,pto,cty,qty,uom} =req.body;
      const newpetrol = await pool.query(
      "INSERT INTO petrol (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [pfrom,pto,cty,qty,uom]
    );

    res.json(newpetrol);
    } catch (err) {
      console.error(err.message);
    }
  });


  //get all petrol

  app.get("/petrol", async (req, res) => {
    try {
      const allpetrol = await pool.query("SELECT * FROM petrol");
      res.json(allpetrol.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  //delete a petrol

  app.delete("/petrol/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM petrol WHERE sr_no = $1", [
        id
      ]);
      res.json("Todo was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });
  
  //post bmcg

app.post("/bmcg", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newbmcg = await pool.query(
    "INSERT INTO bmcg (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newbmcg);
  } catch (err) {
    console.error(err.message);
  }
});


//get all bmcg

app.get("/bmcg", async (req, res) => {
  try {
    const allbmcg = await pool.query("SELECT * FROM bmcg");
    res.json(allbmcg.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a bmcg

app.delete("/bmcg/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletebmcg = await pool.query("DELETE FROM bmcg WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

 //post hsd

 app.post("/hsd", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newhsd = await pool.query(
    "INSERT INTO hsd (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newhsd);
  } catch (err) {
    console.error(err.message);
  }
});


//get all hsd

app.get("/hsd", async (req, res) => {
  try {
    const allhsd = await pool.query("SELECT * FROM hsd");
    res.json(allhsd.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a hsd

app.delete("/hsd/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletehsd = await pool.query("DELETE FROM hsd WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//post acetylene

app.post("/acetylene", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newacetylene = await pool.query(
    "INSERT INTO acetylene (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newacetylene);
  } catch (err) {
    console.error(err.message);
  }
});


//get all acetylene

app.get("/acetylene", async (req, res) => {
  try {
    const allacetylene = await pool.query("SELECT * FROM acetylene");
    res.json(allacetylene.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a acetylene

app.delete("/acetylene/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteacetylene = await pool.query("DELETE FROM acetylene WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//post cng

app.post("/cng", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newcnng = await pool.query(
    "INSERT INTO cng (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newcnng);
  } catch (err) {
    console.error(err.message);
  }
});


//get all cng

app.get("/cng", async (req, res) => {
  try {
    const allcng = await pool.query("SELECT * FROM cng");
    res.json(allcng.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a cng

app.delete("/cng/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletecng = await pool.query("DELETE FROM cng WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//post png

app.post("/png", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newpng = await pool.query(
    "INSERT INTO png (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newpng);
  } catch (err) {
    console.error(err.message);
  }
});


//get all png

app.get("/png", async (req, res) => {
  try {
    const allpng = await pool.query("SELECT * FROM png");
    res.json(allpng.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a png

app.delete("/png/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletepng = await pool.query("DELETE FROM png WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

//post lpg

app.post("/lpg", async (req, res) => {
  try {
    const { pfrom,pto,cty,qty,uom} =req.body;
    const newlpg = await pool.query(
    "INSERT INTO lpg (pfrom,pto,cty,qty,uom) VALUES($1,$2,$3,$4,$5) RETURNING *",
    [pfrom,pto,cty,qty,uom]
  );

  res.json(newlpg);
  } catch (err) {
    console.error(err.message);
  }
});


//get all lpg

app.get("/lpg", async (req, res) => {
  try {
    const alllpg = await pool.query("SELECT * FROM lpg");
    res.json(alllpg.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete a lpg

app.delete("/lpg/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletelpg= await pool.query("DELETE FROM lpg WHERE sr_no = $1", [
      id
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});

  app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
const Pool = require("pg").Pool;

const pool = new Pool({

    user: 'postgres',
    host: 'localhost', 
    database: 'sustainability',
    password: 'M10@OFFICIAL22',
    port: 5432  
  });

  module.exports =pool;
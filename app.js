require("dotenv").config();
const studentRoute = require("./routes/students/studentroute.js");   
const deptRoute = require("./routes/students/deptroute.js");   
const express = require ("express");
const db = require("./db/index");

    const app = new express();                 
    const port = process.env.PORT || 8000;           // port : HTTPS :443  http:18
    db();
    app.use(express.json());
    app.use("/", studentRoute); 
    app.use ("/", deptRoute);  
 
    app.listen (port, () => 
        {          
        console.log(`Express app listening at http://localhost:${port}`);
});
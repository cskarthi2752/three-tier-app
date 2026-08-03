const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "root123",
    database: "appdb"
});

db.connect();

app.get("/api", (req,res)=>{
    res.json({message:"Backend Running"});
});

app.listen(5000,()=>{
    console.log("Server Running");
});

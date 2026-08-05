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

db.connect((err)=>{
    if(err){
        console.log("Database not ready:", err.message);
    }
    else{
        console.log("MySQL Connected");
    }
});

app.get("/api",(req,res)=>{
    res.send("Backend API Working");
});

app.listen(5000,()=>{
    console.log("Backend running on port 5000");
});

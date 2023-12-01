// Portfolio Website Backend

const express = require('express')
const app = express()

const {connectToDb,getDb} = require("./db")

// Creating requist on port 3000--->
const port = 3000;

app.get("/",(req ,res)=>{
    res.send("Node/Server home page requist")
})

// To listen requist on port 3000
app.listen(port,()=>{
    console.log(`Server Started on Port no ${port}`)
})
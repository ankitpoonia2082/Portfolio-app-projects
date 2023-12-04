// Portfolio Website Backend

const path = require('path')
const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())
const myModel = require("./model");
const connectDB = require("./db");

const port = 3000;


connectDB();

app.get("/", (req, res) => {
  res.send('successfull')
});

app.post("/user", async(req, res) => {
    try{
        
        console.log(req.body)
        const newuser =  new myModel(req.body);
        const result = await newuser.save();
        res.send(result);
        
    }
    catch(err){
        res.status(400).send(err);
    }
});


app.listen(port, () => {
  console.log(`Server Started on Port no ${port}`);
});

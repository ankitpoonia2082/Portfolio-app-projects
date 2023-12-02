// Portfolio Application contact form data

const mongoose = require('mongoose')


// Connection String
const uri = "mongodb://localhost:27017/portfolio/users";

mongoose.connect(uri)
.then(()=>{
    console.log("db Connected")
})
.catch((err)=>console.log(err))




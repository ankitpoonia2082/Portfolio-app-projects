// Portfolio Application contact form data

const mongoose = require('mongoose')

// uri(Uniform resource indicator) = Connection String
const uri = "mongodb://localhost:27017/portfolio";

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri);
      console.log(`MongoDB Connected`);
    } catch (error) {
      console.error(error.message);
    }
  }

  module.exports = connectDB





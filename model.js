const {model,Schema} = require('mongoose')

const MySchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50,
      minlength:2
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:13
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

const myModel = new model("users",MySchema)

module.exports = myModel
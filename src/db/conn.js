const mongoose = require("mongoose");

// connectio creating and creating a new db
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/students-api",{
useNewUrlParser:true, useUnifiedTopology:true, useUnifiedTopology:true})
.then( ()=> console.log("Connection is successfull...."))
.catch( (err) => console.log("Your Connection Error is -: " + err));
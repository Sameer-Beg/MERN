let express = require("express");

let mongoose = require("mongoose");

require("dotenv").config();

let app = express();


mongoose.connect(process.env.DBURL).then(()=>{
    console.log("db connected")
    app.listen(process.env.PORT , ()=> console.log(`server is runing on ${process.env.PORT}`))
})

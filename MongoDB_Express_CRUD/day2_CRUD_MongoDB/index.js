// const { name } = require("ejs");
const userModel = require("./userModels");

const express = require("express");

const app = express();

// create
app.get("/create" , async (req , res )=>{
   let createdUser =  await userModel.create({
        name:"Sameer",
        username:"sameer123",
        email:"sameer@gmail.com"
    })
    res.send(createdUser);
})

// update
app.get("/update" , async (req , res )=>{
   let  updateUser = await userModel.findOneAndUpdate(
      { username: "sameerbegking khan" },   // filter condition
      { name: "smrking" },                // updated data
      { new: true }                       // return updated document
    );
res.send(updateUser);
})

// read
app.get("/read", async (req , res )=>{
    let readuser = await userModel.find();
    res.send(readuser);
})


const port = 9000;
app.listen(port , ()=> console.log(`server is runing on ${port}`))
const express  = require('express')
const app = express();

const userModel  = require('./models/user')
const postModel = require('./models/post')



app.get('/' , (req , res )=>{
    res.send("sameer")
})

app.get('/create' , async(req , res)=>{
    let user = await userModel.create({
        username:"sameer",
        age: 32,
        email:"sameer@gmail.com"
    })
    res.send(user)
})
const port = 2002;
app.listen(port , ()=>console.log(`server is runing on ${port}`))

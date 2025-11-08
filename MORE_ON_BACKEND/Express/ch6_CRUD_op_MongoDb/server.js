//exprees
const express = require('express')
        const Userjack = require('./userjack')

const app = express();

const usermodel = require('./usermodel')

app.get('/', (req , res )=>{
res.send('Hello World')
})

// CRUD
// Create
app.get('/create',async(req,res)=>{
  let createduser =   await usermodel.create({
        name: 'sameer',
        username: 'johndoe',
        email: 'sam@gmail.com'
    })
    res.send(createduser)
})
// Read
app.get('/read', async(req , res)=>{
    let readuser = await usermodel.find()
    res.send(readuser)
})
// Update
app.get('/update',async (req , res )=>{
    let updateuser = await usermodel.findOneAndUpdate(
        {name: 'John Doe'},
        {email: 'kking'},
        {new: true}
    
    )
    res.send(updateuser)
})

// Delete
// app.get('/delete', async (req , res)=>{
//     let deleteuser = await usermodel.findOneAndDelete(
//         {name: 'John Doe'}
//     )
//     res.send(deleteuser)
// })


/// drud
app.get('/cresteuserjack', async (req , res)=>{
    let createuserjack = await Userjack.create({
        name: 'jack',
        username: 'jackdoe',
        email: 'kaka@gmail.com'
    })
    res.send(createuserjack)
})
const port = 8000;
app.listen(port , ()=>console.log(`server is running on port ${port}`))


const exprees = require('express')
const cookieParser = require('cookie-parser')
const app = exprees();

app.use(cookieParser())
app.get('/' , (req , res )=>{
    res.cookie('user' , 'sameer')
res.send('Hello World from app.js')
})
app.get('/getcookie' , (req , res )=>{
    console.log(req.cookies)
    res.send('read cookie')
})

const port = 8000;
app.listen(port , ()=>console.log(`server is running on port ${port}`))

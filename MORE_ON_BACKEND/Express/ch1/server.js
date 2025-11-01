const express =  require('express')
const app = express();
app.get('/' , (req , res )=>{
    res.send('Hello from Express server server ')
})
const port = 9000;
app.listen(port,()=>console.log(`server is runing on port ${port}`))
console.log('Server is ready to handle requests');
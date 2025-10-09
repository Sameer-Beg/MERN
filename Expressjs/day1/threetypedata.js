// in this we r learn how much type of data
let express  = require("express");
const { status } = require("init");
let app = express();

// body data
app.use(express.json())
app.post("/loginn" , (req , res )=>{
    console.log(req.body)
    res.send({
        status:1,
        msg : "hello"
    })
})

// quer data
app.post("/q" , (req , res)=>{
    res.send({
        status:1,
        msg : "query data",
        qdata : req.query
    })
})
const port = 9000;
app.listen(port , ()=>console.log(`server is runing on ${port}`))

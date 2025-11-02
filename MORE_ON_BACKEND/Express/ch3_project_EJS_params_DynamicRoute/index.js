const express = require('express');
const app = express();
const Path = require('path');
//parsers 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this is for static files like css , js , images
app.use(express.static(Path.join(__dirname , 'public')));
// this is for view engine
app.set('view engine' , 'ejs');  


// route
app.get("/", function(req , res ){
    res.render("index");
})

// dynamic routing 
app.get("/profile/:username",function(req , res ){
    res.send(req.params.username)
})
// port 
const port = 3000;
app.listen(port, ()=>console.log(`seerver is runing on port ${port}`))




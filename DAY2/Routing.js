let http = require("http");
let server = http.createServer((req , res )=>{

    if(req.url=="/sameer"){
        res.end("Hello Sameer Beg");
    }
    if(req.url == "/tanveer"){
        res.end("Hello Tanveer");
    }

    if(req.url == "/"){
    res.end("Hello from the server");
    }
})
server.listen(4000,()=>{
    console.log("Server is running on port 4000...");
})
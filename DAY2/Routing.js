let http = require("http");

let server = http.createServer((req, res) => {

    if (req.url == "/sameer") {
        res.end("Hello Sameer Beg");
    }
    else if (req.url == "/tanveer") {
        res.end("Hello Tanveer");
    }
    else if (req.url == "/") {
        res.end("Hello from the server");
    }
    else if (req.url == "/obj") {
        // Create an object
        let obj = {
            status: 1,
            data: [
                {
                    title: "iPhone",
                    price: "34000"
                },
                {
                    name: "Sameer",
                    age: "21"
                }
            ]
        };

        // Send JSON response
       
        res.end(JSON.stringify(obj));
    }
    else {
        res.end("404 Page Not Found");
    }
});

server.listen(4000, () => {
    console.log("Server is running on port 4000...");
});

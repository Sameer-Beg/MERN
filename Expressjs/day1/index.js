let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send({
        status: 1,
        msg: "Home page API"
    });
});

app.get("/news", (req, res) => {
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

    res.send(obj);
});

const port = 3000;
app.listen(port, () => console.log(`Server is running on port ${port}...`));

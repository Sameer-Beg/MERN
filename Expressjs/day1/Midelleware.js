let express = require("express");
let app = express();
// midelleware
app.use((req, res, next) => {
    console.log("midelleware runing")
    next();
})
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
app.post("/login", (req, res) => {
    res.send("user data recived ")
}
)
const port = 9000;
app.listen(port, () => console.log(`server is runing on ${port}`))
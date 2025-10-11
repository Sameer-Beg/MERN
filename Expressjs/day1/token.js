let express = require("express");
let app = express();

// ✅ Token
let mytoken = "12345";

// ✅ Middleware
app.use((req, res, next) => {
  // Check if token is present
  if (!req.query.token) {
    return res.send({
      status: 0,
      msg: "Token not found ❌",
    });
  }

  // Check if token is correct
  if (req.query.token !== mytoken) {
    return res.send({
      status: 0,
      msg: "Invalid token ❌",
    });
  }

  // Token is valid → move to next
  next();
});

// ✅ Routes
app.get("/news", (req, res) => {
  let obj = {
    status: 1,
    data: [
      { title: "iPhone", price: "34000" },
      { name: "Sameer", age: "21" },
    ],
  };
  res.send(obj);
});

app.post("/login", (req, res) => {
  res.send("User data received ✅");
});

// ✅ Server
const port = 7000;
app.listen(port, () => console.log(`Server running on port ${port}`));

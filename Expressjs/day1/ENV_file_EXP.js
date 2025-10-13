// ✅ Import modules
const express = require("express");
require("dotenv").config();

const app = express();

// ✅ Get token from .env
const mytoken = process.env.MYTOKEN;
console.log("Your Token:", mytoken);

// ✅ Middleware for token verification
app.use((req, res, next) => {
  // Check if token is provided
  if (!req.query.token) {
    return res.send({
      status: 0,
      msg: "Token not found ❌",
    });
  }

  // Check if token is valid
  if (req.query.token !== mytoken) {
    return res.send({
      status: 0,
      msg: "Invalid token ❌",
    });
  }

  // Token is valid → move to next route
  next();
});

// ✅ Routes
app.get("/news", (req, res) => {
  const obj = {
    status: 1,
    data: [
      { title: "iPhone", price: "34000" },
      { name: "Sameer", age: "21" },
    ],
  };
  res.send(obj);
});

app.post("/login", (req, res) => {
  res.send({
    status: 1,
    msg: "User data received ✅",
  });
});

// ✅ Server
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));


const express = require("express");
const app = express();

// ✅ Middleware function
const checkToken = (req, res, next) => {
  if (req.query.token === "12345") {
    next(); // ✅ token valid → go to route
  } else {
    res.send({ status: 0, msg: "Invalid or missing token ❌" });
  }
};

// ✅ Route-level middleware (only for /news)
app.get("/news", checkToken, (req, res) => {
  res.send({ status: 1, msg: "Welcome to the news page 🗞️" });
});

// ✅ No middleware here
app.get("/about", (req, res) => {
  res.send({ msg: "About Page — No token needed" });
});

app.listen(3000, () => console.log("Server running on port 3000"));

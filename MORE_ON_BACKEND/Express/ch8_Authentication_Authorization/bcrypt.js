const express = require('express');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json()); // to read JSON data from requests

// 🔐 Route 1: Encrypt (hash) password
app.post('/encrypt', async (req, res) => {
  try {
    const { password } = req.body; // get password from body
    const hash = await bcrypt.hash(password, 10); // 10 = salt rounds
    res.json({ hashedPassword: hash });
  } catch (error) {
    res.status(500).json({ error: "Error hashing password" });
  }
});

// 🔓 Route 2: Decrypt (compare password)
app.post('/decrypt', async (req, res) => {
  try {
    const { password, hashedPassword } = req.body;

    const isMatch = await bcrypt.compare(password, hashedPassword);
    res.json({ passwordMatch: isMatch });
  } catch (error) {
    res.status(500).json({ error: "Error comparing password" });
  }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));

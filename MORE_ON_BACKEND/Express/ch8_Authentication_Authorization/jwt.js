const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const app = express();

app.get('/decrypt', (req, res) => {
    let token = jwt.sign({email:'sameer@gmail.com'} , 'secret')
    console.log(token)
});

const port = 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

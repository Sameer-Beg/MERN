const express = require('express');
const app = express();

const Path = require('path');
const cookieParser = require('cookie-parser');

// require kra  h user model
const userModel = require('./models/user');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public') ));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.render('index.ejs');
}
);
app.post('/create', async(req, res) => {
    let {username, email, password, age} = req.body;

    // bcrypt krke password store krna chahte h
    bcrypt.genSalt(10, (err , salt)=>[
        bcrypt.hash(password , salt , async(err , hash)=>{
            let createduser =  await userModel.create({
        username
        ,
        email,
        password: hash,
        age
    })

    res.send(createduser);

        })
    ])

   
}


);

const port = 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

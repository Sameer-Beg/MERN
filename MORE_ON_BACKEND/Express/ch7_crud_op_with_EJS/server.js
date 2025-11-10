const express = require('express');
const path = require('path');
const usermodel = require('./models/user');
const user = require('./models/user');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// ✅ These should be function calls (add parentheses)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/read',async(req , res )=>{
 let users = await usermodel.find()
  res.render('read' , {users});
})

app.post('/create', async(req ,res )=>{
  let {name, email, imgurl} = req.body;
  let createduser  = await usermodel.create({
    name: name,
    email: email,
    imgurl: imgurl
  })
  res.redirect('/read');
})
// Server setup
const port = 9000;
app.listen(port, () => console.log(`EJS server is running on port ${port}`));

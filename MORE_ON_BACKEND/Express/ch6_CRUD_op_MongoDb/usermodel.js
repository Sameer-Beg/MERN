const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb')

const userSchma  = new mongoose.Schema({
    name: String,
    username: String,
    email: String,


})

module.exports = mongoose.model('User', userSchma)



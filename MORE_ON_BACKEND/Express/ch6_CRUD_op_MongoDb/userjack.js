const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/userjackdb')
const userjackSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
})
module.exports = mongoose.model('Userjack', userjackSchema)

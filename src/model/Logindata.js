const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Donors');
const Schema = mongoose.Schema;

var LoginSchema = new Schema({
    uname : String,
    password : String
    
});

var Logindata = mongoose.model('login', LoginSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Logindata;
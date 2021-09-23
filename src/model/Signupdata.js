const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Donors');
const Schema = mongoose.Schema;

var SignupSchema = new Schema({
    uname : String,
    password : String,
    
});

var Signupdata = mongoose.model('signup', SignupSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Signupdata;
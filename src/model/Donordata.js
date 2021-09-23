const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Donors');
const Schema = mongoose.Schema;

var NewDonorSchema = new Schema({
    donorId : Number,
    donorName : String,
    donorCode : String,
    lastdonatedDate : String,
    Address : String,
    phone : Number,
    bloodgroup :String,
    imageUrl : String
});

var Donordata = mongoose.model('donor', NewDonorSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Donordata;
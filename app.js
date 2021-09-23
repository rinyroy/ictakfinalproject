const express = require('express');
const DonorData = require('./src/model/Donordata');
const cors = require('cors');
var bodyparser=require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
username='admin';
password='123456';


function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

app.post('/insert',verifyToken,function(req,res){
   
    console.log(req.body);
   
    var donor = {       
        donorId : req.body.donor.donorId,
        donorName : req.body.donor.donorName,
        donorCode : req.body.donor.donorCode,
        lastdonatedDate : req.body.donor.lastdonatedDate,
        address : req.body.donor.address,
        phone : req.body.donor.phone,
        bloodgroup :req.body.donor.bloodgroup,
        imageUrl : req.body.donor.imageUrl
   }       
   var donor = new DonorData(donor);
   donor.save();
});
app.get('/donors',function(req,res){
    
    DonorData.find()
                .then(function(donors){
                    res.send(donors);
                });
});
app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    DonorData.findOne({"_id":id})
    .then((donor)=>{
        res.send(donor);
    });
})

app.post('/login', (req, res) => {
    let userData = req.body
    
      
        if (!username) {
          res.status(401).send('Invalid Username')
        } else 
        if ( password !== userData.password) {
          res.status(401).send('Invalid Password')
        } else {
          let payload = {subject: username+password}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
        }
      
    })

    app.put('/update',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
      donorId= req.body.donorId,
      donorName = req.body.donorName,
      donorCode = req.body.donorCode,
      lastdonatedDate = req.body.lastdonatedDate,
      address = req.body.address,
      phone= req.body.phone,
      imageUrl = req.body.imageUrl
     DonorData.findByIdAndUpdate({"_id":id},
                                  {$set:{"donorId":donorId,
                                  "donorName":donorName,
                                  "donorCode":donorCode,
                                  "lastdonatedDate":lastdonatedDate,
                                  "address":address,
                                  "phone":phone,
                                  "imageUrl":imageUrl}})
     .then(function(){
         res.send();
     })
   })
   
app.delete('/remove/:id',(req,res)=>{
   
     id = req.params.id;
     DonorData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })
     

app.listen(port, function(){
    console.log('listening to port 3000');
});


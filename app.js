const express = require('express');
const app = express();
const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost:27017');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(80, function(){
  console.log("Listening on port 80!")
});

app.get('/', function(req, res){
    res.sendFile('index.html');
  });
  
app.post('/medicalrecords.html', function (req, res) {
    dbConn.then(function(db) {
        db.collection('medicalrecords').insertOne(req.body);
		
    });     
});
app.post('/updatecontactinfo.html', function (req, res) {
  dbConn.then(function(db) {
      db.collection('users').insertOne(req.body);
  
  });     
});

app.post('/createaccount.html', function (req, res) {
    dbConn.then(function(db) {
        db.collection('users').insertOne(req.body);
		
    }); 
    return res.redirect("/");
});
app.post('/appointments.html', function (req, res) {
  dbConn.then(function(db) {
      db.collection('appointments').insertOne(req.body);
    }); 
  });

app.post('/messages.html', function(req, res, next) {


    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: '',
            pass: ''
        }
    })
    let mailOptions = {
        from: '',
        to: '',
        subject: 'Message to Dr. ' + req.body.doctor,
        text: req.body.message
    };
    res.status(200).send(transporter.sendMail(mailOptions))
    });

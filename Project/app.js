var express = require('express');
var app = express();
var bodyParser=require("body-parser"); 
var MongoCLient = require('mongodb')>MongoCLient;
var url = "mongodb://localhost:3000/testDB";



app.post('/UpdateContactInfo.html', function(req, res){
MongoCLient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("MedicalDB");
    dbo.createCollection("users", function(err,res){
        if (err) throw err;
        console.log('users collenction created');
        db.close();
    })
})
//insert from req
return 201
});


app.listen(3000)
const express = require('express');
const app = express();
const nodeMailer = require('nodemailer');

app.use(express.static('public'));

app.listen(80, function(){
  console.log("Listening on port 80!")
});

app.get('/', function(req, res){
    res.sendFile('index.html');
  });


app.post('/messages.html', function(req, res, next) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ait618group3@gmail.com',
            pass: 'T0ws0n@iT618'
        }
    })
    let mailOptions = {
        from: '"nodemailer" <ait618group3@gmail.com>',
        to: 'thanso2@students.towson.edu',
        subject: 'You sent a message',
        text: 'message'
    };
    res.status(200).send(transporter.sendMail(mailOptions))
    });
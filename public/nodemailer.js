var nodeMailer = require('nodemailer');


    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ait618group3@gmail.com',
            pass: 'T0ws0n@iT618'
        }
    });

    let mailOptions = {
        from: '"nodemailer" <ait618group3@gmail.com>',
        to: 'thanso2@students.towson.edu',
        subject: 'You sent a message',
        text: 'message'
    };


// message = document.forms["messages"]["message"].value;


function send() {transporter.sendMail(mailOptions)}
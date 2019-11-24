const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(80, function(){
  console.log("Listening on port 80!")
});

app.get('/', function(req, res){
    res.sendFile('index.html');
  }); 
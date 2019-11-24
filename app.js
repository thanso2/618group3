const express = require('express');
const app = express();
app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/


app.listen(8080, function(){
  console.log("Listening on port 3000!")
});


app.get('/', function(req, res){
    res.sendFile('index.html');
  }); 
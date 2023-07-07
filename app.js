const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){

  res.sendFile(__dirname +"/index.html");

});

app.post("/",function(req,res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);
  
   res.send("your BMI is "+bmi);

});

app.listen(1000,function(){
  console.log("server port is resonding at port 1000");
});



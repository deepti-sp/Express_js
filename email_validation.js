var express = require('express');
var body_parser = require('body-parser');
var app = express();

app.use(body_parser.json());

app.post('/',function(req, res){
    let email = req.body.email;
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if(reg.test(email))
    res.send(email + ' is validated');
else
    res.send(email + ' is not validated');  
});

app.listen(3000);
console.log('Server started');
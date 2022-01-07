var app = require('./config/server.config')  // import first 4 common lines 

app.get('/',function(req, res){
    res.send("Welcome to express");
});

app.post('/add',function(req, res){
    let operand1 = req.body.operand1;
    let operand2 = req.body.operand2;
    let result = operand1 + operand2;
    res.send('Result of addition is: ' + result );
});


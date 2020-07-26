const express = require('express');
const bodyParser = require('body-parser');
require('./config/config');
app = express();

app.use( bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/usuario/:id', function(req,res){
let id = req.params.id;

res.status(200).json({
    id : id
});
});


app.post('/usuario', function(req,res){
    let body = req.body;
    res.status(200).json({
        body
    });
    });


app.put('/', function(req,res){
        res.send('Put Hello world!');
        });

app.delete('/', function(req,res){
            res.send('Delete Hello world!');
            });

app.listen(3000, () => {
    console.log('Escuchando en puerto ' , process.env.PORT);
});
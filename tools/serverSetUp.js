const express = require('express');
const colors = require('colors');
var app = express();
var mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var db = mongoose.connect('mongodb://localhost/test');

var StandupRouter = require('../routes/standupRouter')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/standups', StandupRouter);

app.listen(port, function(){
  console.log('Gulp listening at port '.green + port);
});

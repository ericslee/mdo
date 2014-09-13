var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

app.use("/js", express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'public')));

var server = http.createServer(app).listen(80); //the port you want to use
console.log("Running server for MDO on port 80");
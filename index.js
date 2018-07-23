var express = require('express');
var path = require('path');
var createError = require('http-errors');
var path = require('path');
var http = require('http');
var fs = require('fs');
var app = express();

//const word=require('./routes/word');

app.use(express.static(path.join(__dirname,'views')));
//Using EJS View engine
app.set("view engine","ejs");
app.set("ejs","./routes");



//Setting Up Route
app.get('/word',function(req,res){
	res.render('word',{title:'working'});
});

app.get('/coverpage',function(req,res){
	res.render('coverpage',{});
});

app.get("/",function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("Hello World");
	res.end();
});
app.listen(8080,function() {
	console.log("Lisiting at 8080");
});


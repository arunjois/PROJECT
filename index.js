var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var app = express();
var publicPath = "/opt/lampp/htdocs/PROJECT/";
app.use(express.static(publicPath));
app.use(publicPath + './img/*', express.static(__dirname + './img/*'));
app.get("/RVCE_logo.jpg",function(req,res){
  fs.readFile("./img/RVCE_logo.jpg",function(err,data){
    res.writeHead(200, {'Content-Type': 'image/html','Content-Length':data.length});
    res.write(data);
    res.end();
  })
});
http.createServer(function(req, res){
    fs.readFile('word.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log(publicPath);

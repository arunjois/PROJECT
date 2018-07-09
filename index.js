var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var app = require('express');
var connect = require('connect');
var publicPath = path.resolve(__dirname, '');
var express=connect();
express.use(app.static(publicPath));
http.createServer(function(req, res){
    fs.readFile('./word.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log(publicPath);

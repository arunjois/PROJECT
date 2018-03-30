var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "login"
});

/*con.connect(function(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("CREATE DATABASE login", function (err, result) {
		console.log("Database created");
	});
});
*/

str="CREATE TABLE Login(USN varchar(10) PRIMARY KEY,NAME varchar(50),Email-Id varchar(40),Password varchar(32))Engine='Innodb'";
con.query(str, function (err, result) {
	console.log("Login created");
});
str="CREATE TABLE Document(ID varchar(20),USN varhcar(10),Title varchar(100),Dir varchar(10) foreign key(USN) reference Login(USN))Engine='Innodb'";
con.query(str,function(err,result) {
	console.log("DOCUMENT created");
});



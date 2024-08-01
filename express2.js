var express = require("express");
var app = express();
app.get("/home",function(req,res){
	res.send("Welcome to Home Page! Namaste")
});
app.post("/contact",function(req,res){
	res.send("Welcome to Contact Page!")
});
app.all("/test",function(req,res){
	res.send("HTTP method doesn't have any effect on this route")
});
app.listen(3000);
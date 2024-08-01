var express = require("express");
var app = express();
app.get('/cvk', function(req,res) {
	res.send("welcome to express js world tested by cvk")
})
app.listen(3000);
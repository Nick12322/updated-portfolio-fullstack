var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;


app.get("/", function(req, res) {
    res.send(path.join(__dirname, "/index.html"));
});







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
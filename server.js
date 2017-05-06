//dependencies
var express = require('express'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    handlebars = require("express-handlebars");


var app = express(),
    PORT = process.env.PORT || 8181;

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller.js")(app);


app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
});
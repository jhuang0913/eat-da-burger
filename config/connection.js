//initiates connection to MYSQL

//require MYSQL
var mysql = require("mysql");

//setup connection
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "9131987",
    database: "burgers_db"
});

//connect to the database
connection.connect(function(err) {
    if (err) {
        console.log("error connecting" + err.stack);
        return;
    }
    console.log('connected as id: ' + connection.threadId);
});

//export connection
module.exports = connection;
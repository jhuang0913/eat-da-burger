//initiates connection to MYSQL

//require MYSQL
var mysql = require("mysql");

//setup connection
var connection;

//heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}

//localhost
else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "9131987",
        database: "burgers_db"
    });
}

connection.connect();
//export connection
module.exports = connection;
//import MYSQL connection
var connection = require("./connection.js");

//select all 
var orm = {
    selectAll: function(cb) {
        connection.query("SELECT * FROM burgers", function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    //insert
    insertOne: function(name, devoured, date) {
        connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)", [name, devoured, date], function(err, data) {
            if (err) throw err;

        });
    },

    //update
    updateOne: function(id) {
        connection.query("UPDATE burgers SET devoured= false WHERE ID = ?", [id], function(err, data) {
            if (err) throw err;


        });
    }
};

//export the orm object 
module.exports = orm;
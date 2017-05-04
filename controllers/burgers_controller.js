var express = require('express');

var router = express.Router();

var burgers = require('../models/burger.js');

router.get('/', function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/', function(req, res) {
    burgers.create({

    })
});

router.put("/:id", function(req, res) {

});

module.exports = router;
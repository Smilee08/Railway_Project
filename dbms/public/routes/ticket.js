var { query } = require('express');
var express = require('express');
const { response } = require('../app');
var router = express.Router();

var database = require('../database');

router.get('/', function(req, res, next) {
    var query = "select * from ticketinfo";

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            res.render('ticket', {title: 'Ticket Details', action:'list', sampleData:data});
        }
    })
  });

  module.exports = router;
var { query } = require('express');
var express = require('express');
const { response } = require('../app');
var router = express.Router();

var database = require('../database');

router.get('/', function(req, res, next) {
    res.render('Passanger', { title: 'Express' });
  });

router.post("/add_Passanger", function(request, response, next){
    var name = request.body.Name;
    var age = request.body.Age;
    var gender = request.body.Gender;
    var aadhar = request.body.Aadhar;
    var address = request.body.Address;

    var query = `
    insert into passinfo(passName, Age, Gender, Aadhar, Address)
    values('${name}', '${age}', '${gender}', '${aadhar}', '${address}')
    `;

    database.query(query, function(error, data){
        if(error)
        {
            throw error;
        }
        else
        {
            response.send("Form Submitted Successfully")
        }
    });

});

module.exports = router;
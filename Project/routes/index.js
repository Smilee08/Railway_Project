var express = require('express');
var router = express.Router();
var { query } = require('express');

var database = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', session : req.session });
});

router.get('/PNRstatus', function(req, res, next) {
  res.render('PNRstatus');
});

router.get('/logout', function(req, res, next) {
  res.render('logout');
});;

router.get('/Passenger', function(req, res, next) {
  res.render('Passenger');
});
router.get('/train', function(req, res, next) {
  res.render('train');
});
router.get('/ticket', function(req, res, next) {
  res.render('ticket');
});

router.post('/', function(request, response, next){

    response.redirect('/');

    var user_email_address = request.body.user_name;

    var user_password = request.body.pass;

    if(user_name && pass)
    {
        query = `
        SELECT * FROM user_login 
        WHERE user_email = "${user_name}"
        `;

        database.query(query, function(error, data){

            if(data.length > 0)
            {
                for(var count = 0; count < data.length; count++)
                {
                    if(data[count].pass == pass)
                    {
                        request.session.user_id = data[count].user_id;

                        response.redirect("/");
                    }
                    else
                    {
                        response.send('Incorrect Password');
                    }
                }
            }
            else
            {
                response.send('Incorrect Email Address');
            }
            response.end();
        });
    }
    else
    {
        response.send('Please Enter Email Address and Password Details');
        response.end();
    }

});

router.get('/logout', function(request, response, next){

    request.session.destroy();

    response.redirect("/");

});

module.exports = router;


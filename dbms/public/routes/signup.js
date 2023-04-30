var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post("/register", function(request, response, next){
  var name = request.body.user_name;
  var gender = request.body.Gender;
  var email = request.body.email;
  var mobile = request.body.mobile;
  var address = request.body.address;
  var pass = request.body.pass;


  var query = `
  insert into signIn values('${name}', '${gender}', '${email}', '${mobile}' '${address}', '${pass}')`;

  database.query(query, function(error, data){
      if(error)
      {
          throw error;
      }
      else
      {
          response.send("User Registered Successfully")
      }
  });

});



router.get('/add_details', function(request,response,next){
  var Sstation = request.body.From;
  var Estation = request.body.To;

  var query = `select * from Train where Start_Staion='${Sstation}' and End_Station='${Estation}'`;
  database.query(query, function(error, data){
    if(error)
    {
      throw error;
    }
    else{
      console.log("Success");
    }
  })
})

module.exports = router;
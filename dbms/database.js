const mysql= require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    database : 'railway',
    user : 'root',
    password : 'password'
});

connection.connect(function(error)
{
    
    if(error)
    {
        throw error
    }
    else
    {
        console.log("connection successful");
    }
});

module.exports = connection;  
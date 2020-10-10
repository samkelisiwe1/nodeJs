const mysql = require('mysql');

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"momo"
});

con.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Connected to the database ')
    }
});


module.exports = con ;
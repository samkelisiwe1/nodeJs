const express = require('express');
const router = express.Router()
const con = require('../connection');


//register new user
router.post('/register', (req, res) => {

    const { userName, lastName, Email, idNumber, Userpassword, userType ,  phoneNumber } = req.body;

 
    con.query('INSERT INTO user SET ?', {userName:userName,lastName:lastName,Email:Email,idNumber:idNumber,Userpassword:Userpassword,userType:userType ,  phoneNumber: phoneNumber }, (error, results) => {

        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {

            return res.json({
                message: "User registration successful.",
                results

            });
        }
    })
});



 //logging a user
 router.post('/login', (req, res) => {

    try {
        const {Email, Userpassword } = req.body;
      

        if(!Email || ! Userpassword ){
            res.send('please provide an email and password')
        }

        let sql = 'SELECT `UserID`, `userName`, `lastName`, `Email`, `idNumber`, `Userpassword`, `userType`, `phoneNumber` FROM `user` WHERE Email = ? '

        con.query(sql, [Email] , (error,results) => {

            res.send(results)
        })

    } catch (error) {
        
        console.log(error)
    }
   

    });


module.exports = router;
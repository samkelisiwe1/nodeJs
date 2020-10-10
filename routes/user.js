const express = require('express');
const router = express.Router()
const con = require('../connection');

router.post('/register', (req, res) => {

    const { userName, lastName, Email, idNumber, Userpassword, userType } = req.body;

 

    con.query('INSERT INTO user SET ?', {userName:userName,lastName:lastName,Email:Email,idNumber:idNumber,Userpassword:Userpassword,userType:userType }, (error, results) => {

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
})

module.exports = router;
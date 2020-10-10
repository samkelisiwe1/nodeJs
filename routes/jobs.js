const express = require('express');
const router = express.Router()
const con = require('../connection')

router.post('/',(req,res) => {

    const { jobName, jodDesc, tag, price, UserID } = req.body;

    con.query('INSERT INTO jobs SET ?', {jobName:jobName,jodDesc:jodDesc,tag:tag,price:price,UserID:UserID }, (error, results) => {

        if (error) {
           console.log(error)
        } else {
            return res.json({
                message: "applied for a job",
                results

            });
        }
    })
})

//getting all jobs
router.get('/' , (req,res) => {
    con.query('SELECT `JobID`, `jobName`, `jodDesc`, `tag`, `price`, `UserID` FROM `jobs`',(error,results) => {
        if(error){
            console.log(error)
        }else{
            res.send(results)
        }
    })
})

module.exports = router ;
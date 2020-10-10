const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));   
app.use(bodyParser.json({}));

//user route
 const userRoute  = require('./routes/user');
 app.use('/user',userRoute )

//jobs route 
const jobsRoute = require('./routes/jobs');
app.use('/jobs' , jobsRoute )
module.exports = app ;
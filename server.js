//pass the functioality of express to the variable through require bulid in function in nodejs
const express = require('express');

//get the details of database through mongoose connection object from the config file 
const db = require('./config/connection');


//require model

//port determines the port on which server listens
const PORT = process.env.PORT|| 3001;

//app defines the server behavior
const app = (express());

//html user  data format paresd to js objest
app.use(express.urlencoded({extended: true}));
//js object json and amle it available in req.body
app.use(express.json);

//when mongooseconnection open express framework
db.once('open', () =>
{
    app.listen(PORT,() =>
    {
        console.log(`API server running at port ${PORT}`)
    })

});
//app.listen() function is a method provided by the Express framework. It is used to start a web server and listen for incoming HTTP requests on the specified port. When a request is received, Express will route it to the appropriate middleware or route handler based on the defined routes and middleware stack.
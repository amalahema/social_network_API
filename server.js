//pass the functioality of express to the variable through require bulid in function in nodejs
const express = require('express');

//get the details of database through mongoose connection object from the config file 
const db = require('./config/connection');
const { urlencoded } = require('body-parser');

//require model

//port determines the port on which server listens
const PORT = process.env.PORT|| 3001;

//app defines the server behavior
const app = (express());

//html user  data format paresd to js objest
app.use(express.urlencoded({extended: true}));
//js object json and amle it available in req.body
app.use(express.json);

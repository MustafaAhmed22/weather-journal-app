// Setup empty JS object to act as endpoint for all routes
projectData = {};
import * as express from 'express';
// Require Express to run server and routes
const express =require ('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
// Start up an instance of app
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 5050
const server =app.listen(port ,()=>{
    console.log(`server is running on localhost : ${port}`)
})
app.get('/all' ,(req,res)=>{
    res.send(projectData).status(200)

})
app.post('/add',(req,res)=>{
    console.log(req.body)
    projectData ={
        date : req.body.date,
        temp :req.body.temp,
        content : req.body.content
    }
        res.send(projectData).status(200)

})
//Import express model
var express = require('express');
//Instantiate express model
var app = express();

var cors = require ('cors');
app.use(cors());

//Turn on server on port 3000
var server = app.listen(3000, function(){
    console.log("Server is ON")
})

//Create Employer ojbect array
const Data1 = [
{ title: "visiting the family", description: "summer vacation", date: "July 1, 2023", time: "12:00pm", priority_level: "low", category: "spare time", progress_level: "complete"},
{ title: "science homework", description: "first week homework", date: "Sept 1, 2023", time: "8:00am", priority_level: "high", category: "homework", progress_level: "not started"}
];


//Create Get method to send data when visiting localhost:8000
app.get('/tasks/get_all',(req, res)=>{
    res.send(Data1);
});
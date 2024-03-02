projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
const req = require('express/lib/request');
app.use(cors());


app.use(express.static('website'));


const port = 8000;
const server = app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
});




const data = [];
app.post('/addWeatherState', (request, response)=>{

    let newData = request.body;
    projectData['date'] = newData.date;
    projectData['temp'] = newData.temp;
    projectData['feel'] = newData.feel;
    data.push(projectData);
    response.send(projectData);
    console.log("This is the data retreived from app.js and posted here in the server: ", projectData);
 });


 app.get('/updatURL', (request, response)=>{
     response.send(projectData);
     console.log("its data from server sent to client \"update frontend\" ", projectData);
 })
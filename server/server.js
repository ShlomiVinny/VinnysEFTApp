const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const { createDB } = require('./mogofunctions')


// DB Initialization 

function handleDB(){ 
    console.log('DB handling is running...');
    createDB(); //createDB
    console.log('DB handling is done, waiting for responses...');
}


// ---- yargs and argv ----
const argv = require('yargs').argv

if (argv.startDB) {
    console.log('Starting server with DB');
    handleDB();
} else {
    console.log('Starting server without DB');
}

// ---- end of yargs and argv ----


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Request framework requests
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});


let port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log('App listening on port: ' + port)
})
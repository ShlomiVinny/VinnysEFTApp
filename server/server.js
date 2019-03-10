const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { createDB } = require('./mogofunctions');
const myData = require('./src/data.json');


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


app.get('/api/greeting', (req, res) => {
    const name = 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
  });

let port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('App listening on port: ' + port)
})
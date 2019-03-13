const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { createDB } = require('./mongofunctions');
const myData = require('../src/data.json');


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
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', cors(), (req, res) => {
    
    res.send(myData);
    console.log('Server sent response for url:"/" ');
    console.dir(myData);
  });

let port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log('App listening on port: ' + port)
})
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');


// yargs and argv
const argv = require('yargs').argv
const app = express();
if(argv.startDB){
     console.log('Starting server with DB');
}else{
    console.log('Starting server without DB');
}

// end of yargs and argv


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/ajax', (req, res) => {
    const personName = req.body.person;

    let url = "mongodb://vinnyseftapp-6137:RaPkZYvKDcAV8cVaAR7E4LG7nBVwKW@db-vinnyseftapp-6137.nodechef.com:5443/vinnyseftapp"; //url of the db you want to access

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("peopleJobs");
        let query = {'client':personName};
        dbo.createCollection("clientsJobs").findOne({}, function (err, result) {
            if (err) throw err;
            console.log("Collection clientsJobs created!");
            res.send(result.name)
            db.close();
        });
        dbo.createCollection("jobs").findOne({}, function (err, result) {
            if (err) throw err;
            console.log("Collection jobs created!");
            res.send(result.name)
            db.close();
        });
    });
});
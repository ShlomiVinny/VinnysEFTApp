let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://vinnyseftapp-6137:Q!q1w2w2e3e3@db-vinnyseftapp-6137.nodechef.com:5443/vinnyseftapp";
let collections = 0;
let myData = require('../src/data.json');
let launchNextFunc=false;

function createDB() {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        console.log("Database created!");
        db.close();
        asyncCall();
    });
} //end of createDB




function createCollections() {
    return new Promise(resolve => {
    // Navbar Items
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw ('Problem connecting to MongoClient in createCollections');
        var dbo = db.db("vinnyseftapp");
        console.log('Creating Collections...');

        dbo.createCollection("General", (err, res) => {
            if (err) throw ('General not created');
            collections++;
            db.close();
            console.log('General Created!');
        });
        dbo.createCollection("Content", (err, res) => {
            if (err) throw ('Content not created');
            collections++;
            db.close();
            console.log('Content Created!');
        });
        dbo.createCollection("Users", (err, res) => {
            if (err) throw ('Users not created');
            collections++;
            db.close();
            console.log('Users Created!');
        });
        dbo.createCollection("Locations", (err, res) => {
            if (err) throw ('Locations not created');
            collections++;
            db.close();
            console.log('Locations Created!');
        });
        dbo.createCollection("Comments", (err, res) => {
            if (err) throw ('Comments collection not created');
            collections++;
            db.close();
            console.log('Comments collection created!');
        });


// add more collections here


    });

        resolve(launchNextFunc=true, console.log('Resolved! Next func!'));
        
    })
     } //end of createCollections function


     async function asyncCall() {
        console.log('calling');
        var result = await createCollections();
        launchNextFunc ? insertInitialData() : console.log('waiting for collections to be created...');
        // expected output: 'resolved'
      }


function insertInitialData() {
    console.log('Inserting data into collections...');
     // after all collections have been created, lets report the correct number
    if(collections===1){
        console.log(collections+' collection created!');
    }else{
        console.log(collections+' collections created!');
    }

    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;

        var dbo = db.db("vinnyseftapp");
        let general = myData.General;
        let content = myData.Content;
        let users = myData.Users;
        let locations = myData.Locations;
        let comments = myData.Comments;

        // Insert navbar and sidebar items
        dbo.collection("General").insertOne(general, (err, res) => {
            if (err) throw ('navbar items not inserted');
            console.log("Documents inserted into navbar_items: " + res.insertedCount);
            db.close();
        });
        //Insert Content
        dbo.collection("Content").insertOne(content, (err, res) => {
            if (err) throw ('Content items not inserted');
            console.log("Documents inserted into Content: " + res.insertedCount);
            db.close();
        });
        // Insert Users
        dbo.collection("Users").insertMany(users, (err, res) => {
            if (err) throw ('Users items not inserted');
            console.log("Documents inserted into Users: " + res.insertedCount);
            db.close();
        });
        // Insert Locations
        dbo.collection("Locations").insertOne(locations, (err, res) => {
            if (err) throw ('Locations items not inserted');
            console.log("Documents inserted into Locations: " + res.insertedCount);
            db.close();
        });
        // Insert Comments
        dbo.collection("Comments").insertOne(comments, (err, res) => {
            if (err) throw ('Comments items not inserted');
            console.log("Documents inserted into Comments: " + res.insertedCount);
            db.close();
        });

    });
} // end of createInitUserData


module.exports = { createDB, createCollections, insertInitialData };


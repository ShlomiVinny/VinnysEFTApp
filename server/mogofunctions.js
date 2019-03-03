let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://vinnyseftapp-6137:Q!q1w2w2e3e3@db-vinnyseftapp-6137.nodechef.com:5443/vinnyseftapp";
let collections = 0;
let myData = require('../src/data.json');

function createDB() {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        console.log("Database created!");
        db.close();
        createCollections();
    });
} //end of createDB



function createCollections() {
    // Navbar Items
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        var dbo = db.db("vinnyseftapp");
        console.log('Creating Collections...');

        dbo.createCollection("General", (err, res) => {
            if (err) throw err;
            collections++;
            db.close();
            console.log('General Created!');
        });
        dbo.createCollection("Content", (err, res) => {
            if (err) throw err;
            collections++;
            db.close();
            console.log('Content Created!');
        });
        dbo.createCollection("Users", (err, res) => {
            if (err) throw err;
            collections++;
            db.close();
            console.log('Users Created!');
        });
        dbo.createCollection("Locations", (err, res) => {
            if (err) throw console.log('Locations not created');
            collections++;
            db.close();
            console.log('Locations Created!');
        });
        dbo.createCollection("Comments", (err, res) => {
            if (err) throw err;
            collections++;
            db.close();
            console.log('Comments Created!');
        });
        
        
    });

    // add more collections here
    
    insertInitialData();

    if(collections===1){
    console.log(collections+' collection created!');
}else{
    console.log(collections+' collections created!');
}

} //end of createCollections function




 function insertInitialData() {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
        if (err) throw err;
        var dbo = db.db("vinnyseftapp");
        var navbar = myData.General.navbar_items;
        var sidebar = myData.General.sidebar_items;
        // Insert navbar and sidebar items
        dbo.collection("General").insertMany(navbar, (err, res) => {
            if (err) throw ('navbar items not inserted');
            console.log("Documents inserted into navbar_items: " + res.insertedCount);
            db.close();
        });
        dbo.collection("General").insertMany(sidebar, (err, res) => {
            if (err) throw ('navbar items not inserted');
            console.log("Documents inserted into sidebar_items: " + res.insertedCount);
            db.close();
        });
        //Insert Content
        dbo.collection("Content").insertMany(myData.Content, (err, res) => {
            if (err) throw err;
            console.log("Documents inserted into Content: " + res.insertedCount);
            db.close();
        });
        // Insert Users
        dbo.collection("Users").insertMany(myData.Users, (err, res) => {
            if (err) throw err;
            console.log("Documents inserted into Users: " + res.insertedCount);
            db.close();
        });


    });
} // end of createInitUserData


module.exports = { createDB, createCollections, insertInitialData };


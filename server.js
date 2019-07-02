//Read and sets environmental variables with .env package
require("dotenv").config();

// Dependenices
const express = require ("express");
const bodyParser = require ("body-parser");
const logger = require("morgan");
const mongoose = require ("mongoose");
const expHandlebars = require ("express-handlebars");
//this is a note to test heroku

let PORT = process.env.PORT || 3000;
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:pass11@ds243607.mlab.com:43607/heroku_nh69ttcp";
//let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news_scraper";

//initialize express
const app = express ();

//user morgan logger for logging requests
app.use(logger("dev"));

//user body-parser to handle form submissions
app.use(bodyParser.urlencoded({extended:true}));

//set static directory
app.use(express.static("public"));

//set Handlebars as the default templating engine
app.engine("handlebars", expHandlebars({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//database configuration
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true });


// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//mongoose.connect(MONGODB_URI);

// check connection status
let db = mongoose.connection;
db.on('error', (error)=>{
    console.log(`Connection error ${error}`);
});

require('./routes/routes.js')(app);

// start server
app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});

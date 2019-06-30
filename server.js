//Read and sets environmental variables with .env package
require("dotenv").config();

// Dependenices
const express = require ("express");
const bodyParser = require ("body-parser");
const logger = require("morgan");
const mongoose = require ("mongoose");
const expHandlebars = require ("express-handlebars");

let PORT = process.env.PORT || 3000;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/news_scraper";

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
mongoose.connect(MONGODB_URI, {userMongoClient: true});

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
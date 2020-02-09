var express = require('express');
var   app     = express();
var request = require('request');
const fs = require("fs");
var    bodyParser = require('body-parser');
var    mongoose   = require('mongoose');
var    os = require('os');
var    hostname = os.hostname(); 
var path = require('path');  
require('./db/mongoose');
const errorHandler = require('./_helper/error-handler');
var router = express.Router();
var path = __dirname + '/public/';

app.use(errorHandler);
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: true,limit: '100mb' })); 
app.use(bodyParser.json({limit: '50mb'}));
app.use(function(req, res, next) { 
res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,OPTIONS"); 
res.header("Access-Control-Allow-Origin", "*"); 
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
next();
 });
 

var port = process.env.PORT || 8081;


//All artisan routers
//var indexRouter = require('./routes');
//var mailerRouter = require('./routes/mailer');
//var artisanRouter = require('./routes/artisan/Artisan');
/* 
var wordAssessementRouter = require('./routes/wordAssessement/WordAssessement');
var commentReactionRouter = require('./routes/commentReaction/CommentReaction');
var postReactionRouter = require('./routes/postReaction/PostReaction'); */


//app.use(express.static('data',{index:false, extensions:['json']}),jsonRoute);
//app.use('/', indexRouter);  
// app.use('/public/assets/', express.static(__dirname + '/public/assets/'));

/* app.use('/api/commentReaction', commentReactionRouter);
app.use('/api/wordAssessement', wordAssessementRouter);
app.use('/api/postReaction', postReactionRouter); */



router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
 

  app.use('/dept/admin/tni/auth', require('./route/Authentication')); 
  app.use('/dept/admin/tni/userr', require('./route/User')); 

  


 // var localURI = "mongodb://localhost:27017/samplledb";
  //var mongoURL = remoteURI;
  
  mongoose.Promise = global.Promise;
  
  // Connecting to the database
  // mongoose.connect(mongoURL, {
  //     useNewUrlParser: true
  // }).then(() => {
  //     console.log("Successfully connected to the database");    
  // }).catch(err => {
  //     console.log('Could not connect to the database. Exiting now...', err);
  //     process.exit();
  // });

app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

module.exports = app;

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


var wordAssessementRouter = require('./routes/wordAssessement/WordAssessement');

//app.use(express.static('data',{index:false, extensions:['json']}),jsonRoute);
//app.use('/', indexRouter);  
 app.use('/public/assets/', express.static(__dirname + '/public/assets/'));
 app.use('/public/css/', express.static(__dirname + '/public/css/'));
 app.use('/public/css/assets/', express.static(__dirname + '/public/css/assets/'));
 app.use('/public/css/assets/', express.static(__dirname + '/public/css/assets/'));
 app.use('/public/css/assets/images', express.static(__dirname + '/public/css/assets/images/'));
 app.use('/public/css/assets/icons', express.static(__dirname + '/public/css/assets/icons'));
 app.use('/public/css/assets/fonts', express.static(__dirname + '/public/css/assets/fonts'));
 app.use('/public/css/assets/js', express.static(__dirname + '/public/css/assets/js'));
 app.use('/public/css/assets/js/apps', express.static(__dirname + '/public/css/assets/js/apps'));
 app.use('/public/css/assets/js/apps/calender', express.static(__dirname + '/public/css/assets/js/apps/calender'));
 app.use('/public/css/assets/js/apps/chat', express.static(__dirname + '/public/css/assets/js/apps/chat'));
 app.use('/public/css/assets/js/apps/dashboard', express.static(__dirname + '/public/css/assets/js/apps/dashboard'));
 app.use('/public/css/assets/js/apps/e-commerce', express.static(__dirname + '/public/css/assets/js/apps/e-commerce'));
 app.use('/public/css/assets/js/components', express.static(__dirname + '/public/css/assets/js/components'));
 app.use('/public/css/assets/revolution', express.static(__dirname + '/public/css/assets/revolution'));
 app.use('/public/css/assets/vendor', express.static(__dirname + '/public/css/assets/vendor'));
 app.use('/public/css/assets/vendor/animate.css', express.static(__dirname + '/public/css/assets/vendor/animate.css'));
 app.use('/public/css/assets/vendor/bootstrap/', express.static(__dirname + '/public/css/assets/vendor/bootstrap'));
 app.use('/public/css/assets/vendor/d3', express.static(__dirname + '/public/css/assets/vendor/d3'));
 app.use('/public/css/assets/vendor/datatables-responsive', express.static(__dirname + '/public/css/assets/vendor/datatables-responsive'));
 app.use('/public/css/assets/vendor/datatables.net', express.static(__dirname + '/public/css/assets/vendor/datatables.net'));
 app.use('/public/css/assets/vendor/fullcalender', express.static(__dirname + '/public/css/assets/vendor/fullcalender'));
 app.use('/public/css/assets/vendor/fuse-html', express.static(__dirname + '/public/css/assets/vendor/fuse-html'));
 app.use('/public/css/assets/vendor/jquery', express.static(__dirname + '/public/css/assets/vendor/jquery'));
 app.use('/public/css/assets/vendor/mobile-detect', express.static(__dirname + '/public/css/assets/vendor/mobile-detect'));
 app.use('/public/css/assets/vendor/moment', express.static(__dirname + '/public/css/assets/vendor/moment'));
 app.use('/public/css/assets/vendor/nvd3', express.static(__dirname + '/public/css/assets/vendor/nvd3'));
 app.use('/public/css/assets/vendor/perfect-scrollbar', express.static(__dirname + '/public/css/assets/vendor/nvd3/perfect-scrollbar'));
 app.use('/public/css/assets/vendor/pnotify', express.static(__dirname + '/public/css/assets/vendor/pnotify'));
 app.use('/public/css/assets/vendor/popper.js', express.static(__dirname + '/public/css/assets/vendor/popper.js'));










router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
  router.get("/",function(req,res){
    res.sendFile(path + "index.html");
  });
 
  app.use('/dept/admin/tni/auth', require('./route/Authentication')); 
  app.use('/dept/admin/tni/distributor', require('./route/Distributor')); 
  app.use('/dept/admin/tni/user', require('./route/User')); 
  app.use('/dept/admin/tni/distributions', require('./route/Distribution')); 
  app.use('/dept/admin/tni/team', require('./route/Team')); 
  app.use('/dept/admin/tni/language', require('./route/Language')); 
  app.use('/dept/admin/tni/download', require('./route/Download')); 
  app.use('/dept/admin/tni/translation', require('./route/Translation')); 
 //mapping for frontend views
  app.use('/public/auth-login.html', require('/public/login'));
  app.use('/public/auth-register.html', require('/public/register'));
  app.use('/public/auth-reset.html', require('/public/passwordreset'));
  app.use('/public/auth-lock-screen.html', require('/public/lockscreen'));
  app.use('/public/auth-forgot-password.html', require('/public/forgotpassword'));
  app.use('/public/dashboard.html', require('/public/dashboard'));
 
app.listen(port,() => {
    console.log(`Server running at port `+port);
    });

console.log('nodejs server running on '+ port);

module.exports = app;

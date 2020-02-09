const mongoose = require('mongoose'); 
const config = require('./config.json');

mongoose.Promise = global.Promise;
mongoose.connect(config.connectionString, { useCreateIndex: true, useNewUrlParser: true }).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

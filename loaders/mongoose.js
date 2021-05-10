const mongoose = require('mongoose');
const config = require('../config');

module.exports.init = async()=>{
    mongoose.Promise = global.Promise;
    mongoose.set('returnOriginal', false);
    try {
        mongoose.connect(config.databaseURL, {useFindAndModify:false, 
                        useNewUrlParser:true, useCreateIndex:true,
                        useUnifiedTopology:true});
    
        console.log("Successfully connected to database.");
    } catch (error) {
        console.log("Error while connecting to database.")
    }
}

const express = require('express');

const loaders = require('./loaders');

const config = require('./config');

let createServer = async() => {
    let app = express();
    await loaders.init(app);

    app.listen(config.port, (err)=>{
        if(err){
            console.log("Server could not start up.");
        }
        else{
            console.log(`Server started at port ${config.port}`)
        }
    })
}

createServer();
const express = require('express');

const expressLoader = {}

expressLoader.init = async(app)=>{
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    return app;
}

module.exports = expressLoader;

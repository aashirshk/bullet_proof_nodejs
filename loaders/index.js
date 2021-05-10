const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

console.log("Mongoose loader");

console.log(mongooseLoader);

module.exports.init = async(app) => {
    await mongooseLoader.init();
    await expressLoader.init(app);
}


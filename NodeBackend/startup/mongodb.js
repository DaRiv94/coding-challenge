const config = require('config');
const mongoose = require('mongoose');

module.exports = function(){
    
    
    //connect to mongodb
const db = config.get('db');
mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log(`Connecting to mongodb...`));
}
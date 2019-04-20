const express = require('express');
const app = express();
const refferalRoutes = require('./routes/refferal');
const bodyparser = require('body-parser');
const config = require('config');
const mongoose= require('mongoose');



const db = config.get('db');
mongoose.connect(db, { useNewUrlParser: true })
.then(()=> console.log(`Connecting to ${db}...`));



app.use(bodyparser.json());
app.use('/refferal', refferalRoutes);




app.get('/', (req, res)=>{
    res.send('Hello world from Root Route');
});



const port= process.env.PORT || 4000;

app.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log(`running on port ${port}...`)
});
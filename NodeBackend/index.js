const express = require('express');
const app = express();
const refferalRoutes = require('./routes/refferal');
const bodyparser = require('body-parser');
const cors= require('cors');


require('./startup/mongodb')(); //connect to mongodb

//Allows for parsing json
app.use(bodyparser.json());


app.options('*', cors()) // include before other routes


//refferal route with CRUD operations
app.use('/refferal', refferalRoutes);

app.get('/', (req, res)=>{
    res.send("Hello from the index route")
});

//defaults to 4000 if port is not specified
const port= process.env.PORT || 4000;


app.listen(port, (err)=>{
    if(err) return console.log(err);
    console.log(`App running on port ${port}...`)
});
const express = require('express');
const router = express.Router();
const {validate, Link} = require('../Models/link');

//Create a new link
router.post('/', async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send('Error: '+ error.details[0].message);

    let link = await Link.findOne({title:req.body.title});
   if(link) return res.status(400).send('there is already a link with that title.');

   link = new Link({
        title:req.body.title,
        numberOfClicks:0
   });

   await link.save();

   return res.send(link);

});

module.exports = router;
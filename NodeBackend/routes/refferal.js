const express = require('express');
const router = express.Router();
const { validate, Link } = require('../Models/link');

//Create a new link
router.post('/', async (req, res) => {
     //validate body
     const { error } = validate(req.body);
     if (error) return res.status(400).send('Error: ' + error.details[0].message);

      //Validate that there is not another link with new title
     let link = await Link.findOne({ title: req.body.title });
     if (link) return res.status(400).send('there is already a link with that title.');

     link = new Link({
          title: req.body.title,
          numberOfClicks: 0
     });

     await link.save();

     return res.send(link);

});

//Get list of all links
router.get('/', async (req, res) => {
     let links = await Link.find();

     res.send(links);

});

//Get link by Id
router.get('/:id', async (req, res) => {
     //validate id
     let link = await Link.findById(req.params.id);
     if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`)

     return res.send(link);

});

//Edit refferal title by Id
router.put('/:id', async (req, res) => {

     //Validate Body
     const { error } = validate(req.body);
     if (error) return res.status(400).send('Error: ' + error.details[0].message);

     //Validate Id
     let link = await Link.findById(req.params.id);
     if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`);

     //Validate that there is not another link with new title
     let linkTitle = await Link.findOne({ title: req.body.title });
     if (linkTitle) return res.status(400).send('there is already a link with that title.');

     link.title = req.body.title;

     await link.save();

     return res.send(link);

});

//Add Click to link by id
router.put('/click/:id', async (req, res) => {

     //Validate Id
     let link = await Link.findById(req.params.id);
     if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`);

     link.numberOfClicks = link.numberOfClicks + 1;

     await link.save();

     return res.send(link);

});

//Delete link by id
router.delete('/:id', async (req, res)=>{

     //Validate Id
     let link = await Link.findByIdAndRemove(req.params.id);
     if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`);

     return res.send(link);

});



module.exports = router;
const express = require('express');
const router = express.Router();
const { validate, Link } = require('../Models/link');
const cors = require('cors');

const corsOptions = require('../startup/cors')();

//Create a new link
router.post('/', cors(corsOptions), async (req, res) => {

     try{
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
     }
     catch(err){
          console.log("ERROR: ",err)
     }

     

});

//Get list of all links
router.get('/', cors(corsOptions), async (req, res) => {

     try{
          let links = await Link.find();

          res.send(links);
     }
     catch(err){
          console.log("ERROR: ",err)
     }

     

});

//Get link by Id
router.get('/:id', cors(corsOptions), async (req, res) => {

     try{
          //validate id
          let link = await Link.findById(req.params.id);
          if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`)

          return res.send(link);
     }
     catch(err){
          console.log("ERROR: ",err)
     }

     

});

//Edit refferal title by Id
router.put('/:id', cors(corsOptions), async (req, res) => {

     try{
          //Validate Body
          const { error } = validate(req.body);
          if (error) return res.status(400).send('Error: ' + error.details[0].message);

          //Validate Id
          let link = await Link.findById(req.params.id);
          if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`);

          if(link.title !== req.body.title){
               //Validate that there is not another link with new title
               let linkTitle = await Link.findOne({ title: req.body.title });
               if (linkTitle) return res.status(400).send('there is already a link with that title.');

               link.title = req.body.title;

               await link.save();
          }
          

          return res.send(link);
     }
     catch(err){
          console.log("ERROR: ",err)
     }

     

});

//Add Click to link by title
router.put('/click/:title', cors(), async (req, res) => {
     try{
            //Validate that there is not another link with new title
            let link = await Link.findOne({ title: req.params.title });
            if (!link) return res.status(404).send(`there is no link with title: req.body.title`);

          link.numberOfClicks = link.numberOfClicks + 1;

          await link.save();

          return res.send(link);
     }
     catch(err){
          console.log("ERROR: ",err)
     }

});

//Delete link by id
router.delete('/:id', cors(corsOptions), async (req, res)=>{

     try{
          //Validate Id
          let link = await Link.findByIdAndRemove(req.params.id);
          if (!link) return res.status(404).send(`No link found with id: ${req.params.id}`);

          return res.send(link);
     }
     catch(err){
          console.log("ERROR: ",err)
     }
     

});



module.exports = router;
const mongoose = require('mongoose');
const Joi = require('joi');

//Link Schema for mongoose to understand how and what to add to mongodb
const linkSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength:1,
        maxlength:50
        },
    numberOfClicks:{
        type:Number,
        required:true,
        min:0
        }

});

const Link = mongoose.model('Link', linkSchema);

//for validating the body with POST and PUT to create and edit a link respectivly
function validateLink(link){
    const schema ={
        title: Joi.string().min(1).max(50).required(),
    }

    return Joi.validate(link, schema)
}
exports.linkSchema = linkSchema;
exports.Link= Link;
exports.validate= validateLink;
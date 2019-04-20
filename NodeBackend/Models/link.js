const mongoose = require('mongoose');
const Joi = require('joi');


const linkSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minlength:5,
        maxlength:50
        },
    numberOfClicks:{
        type:Number,
        required:true,
        min:0
        }

});

const Link = mongoose.model('Link', linkSchema);

function validateLink(link){
    const schema ={
        title: Joi.string().min(5).max(50).required(),
    }

    return Joi.validate(link, schema)
}
exports.linkSchema = linkSchema;
exports.Link= Link;
exports.validate= validateLink;
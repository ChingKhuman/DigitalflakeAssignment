const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;


const categoryModal = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
       description: {
        type: String        
       },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: true}
);


   


module.exports =  mongoose.model("Category", categoryModal);


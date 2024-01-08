const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema
const { ObjectId } = mongoose.Schema.Types;


const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        package: {
            type: String,
            required: true,
        },
        categoryID: {
            type: ObjectId,
            required: true,
        },
        mrp: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            
        },
        status: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: true}
);


   


module.exports =  mongoose.model("Product", productSchema);


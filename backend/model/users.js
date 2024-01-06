const mongoose = require("mongoose");
const validator = require('validator')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

userSchema.statics.signup = async function(email, password) {
    
    //validation
    if(!email || !password) {
        throw Error('All fields are Required')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong')
    }

    const exists = await this.findOne({email})

    if(exists){
        throw Error("Email exist")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash })

    return user
}

userSchema.statics.login = async function(email, password) {
   
    if(!email || !password) {
        throw Error('All fields required')
    }
    const user = await this.findOne({email})

    if(!user) {
        throw Error ('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}   


module.exports =  mongoose.model("Users", userSchema);


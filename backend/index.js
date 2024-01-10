const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require('cors');





require("dotenv").config();

const userRoute = require('./routes/user')
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')
const User = require('./model/users')


app.use(express.json())
app.use(cors())


const PORT = 6000;

mongoose.connect("mongodb+srv://khumanchingtham123:LejS2tS2B9AHRvlU@cluster0.9pqxmex.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/category", categoryRoute)

// app.post('/login', (req, res) => {
//     const {email, password} = req.body;
//     User.findOne({email})
//     .then(user => {
//         if(user) {
//             if(user.password === password){
//                 const accessToken = jwt.sign({email: email}, "jwt-access-token-secret-key", {expiresIn: '20m'})
//                 const refreshToken = jwt.sign({email: email}, "jwt-regresh-token-secret-key", {expiresIn: '20m'})

//                 res.cookie('access Token', accessToken, {maxAge: 6000})

//                 res.cookie('refresh Token', refreshToken, {
//                     maxAge: 300000, httpOnly: true, secure: true, sameSite: 'strict'
//                 })
//                 res.json("Login Successfull")
//             }
//         }else{
//             res.json('no record')
//         }
//     }).catch(err => res.json(err))

// })

app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`))
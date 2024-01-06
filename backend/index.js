const express = require("express")
const mongoose = require("mongoose")
const app = express();

require("dotenv").config();

const userRoute = require('./routes/user')


app.use(express.json())


const PORT = 6000;

mongoose.connect("mongodb+srv://khumanchingtham123:LejS2tS2B9AHRvlU@cluster0.9pqxmex.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));

app.use("/user", userRoute)

app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`))
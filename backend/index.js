const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require('cors');


require("dotenv").config();

const userRoute = require('./routes/user')
const productRoute = require('./routes/productRoute')
const categoryRoute = require('./routes/categoryRoute')


app.use(express.json())
app.use(cors())


const PORT = 6000;

mongoose.connect("mongodb+srv://khumanchingtham123:LejS2tS2B9AHRvlU@cluster0.9pqxmex.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Mongo Error", err));

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/category", categoryRoute)

app.listen(PORT, () => console.log(`Server Started at Port:${PORT}`))
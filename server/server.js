const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');


const app = express();

//db connection
dotenv.config({path: './.env'});

mongoose.connect(process.env.CONNECTION_URI, {
    dbName:'portfolio'
})
.then(()=> console.log("Connection established"))
.catch((err)=> console.log(err))

//middleware setup
app.use(cors({credentials: true, origin:'http://localhost:5173'}));
app.use(morgan('dev'));


app.listen(process.env.PORT, () => {
    console.log(`Connected to the server at PORT ${process.env.PORT}`)
})

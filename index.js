
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//cookie parser -> what is this and why we need this?
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Middleware to parse json
app.use(express.json());

require("./config/database").connect();

//route import karo and mount 
const user = require("./routes/user");
app.use("/api/v1" , user);

//activate server
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})
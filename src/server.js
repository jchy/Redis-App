const express = require('express');
const app = express();

const connect = require('./config/db');

const userController = require("../src/controllers/user.controller")

app.use(express.json());

app.use("/user", userController);

const start = async () => {
    await connect();
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    });
}

module.exports = start;
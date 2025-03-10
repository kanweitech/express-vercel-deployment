const express = require('express');

const app = express();

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());

function main() {
    
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
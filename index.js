const express = require('express');

const app = express();

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;
require("dotenv").config();

// middleware
app.use(express.json());

async function main() {
    await mongoose.connect("mongodb+srv://odisvybz:uYkTC4Hg8YeVnb1I@kaweitechcluster.yujkj.mongodb.net/book-store?retryWrites=true&w=majority&appName=KaweitechCluster");
    
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

module.exports = app;
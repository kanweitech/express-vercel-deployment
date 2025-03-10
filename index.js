const express = require('express')

const app = express()

const port = process.env.PORT || 5000

function main() {
    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
const express = require("express");
const https = require("https");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
    const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious&=racist&=sexist"
    https.get(url, function (response) {
        console.log(response.statusCode);
    })
});

app.listen(3000, function(){
    console.log("Server started on port 3000")
});


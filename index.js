const PORT = 8000;
const express = require("express")
const cors = require("cors")
const axios = require("axios")
require("dotenv").config()



const app = express()

app.use(cors());

app.get("/", (req,res) => {
    res.json("Hi!")
})

app.get("/news", (req,res) => {
    const fetchData = async () => {

    var url = "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=" + process.env.REACT_APP_NEWS_API_KEY;

    console.log(`url: [${url}]`)

    var req = new Request(url);
    fetch(req)
        .then(function(response) {
        console.log(response.json().then( e => res.json(e.articles) ));
        })
    } 
    fetchData();
})


app.listen(8000, () => console.log(`Server is running on port: ${PORT}`));




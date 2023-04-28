const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Received GET Request")
    let city = req.query.city;
    let skip = req.query.skip;

    fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&city=${city}&limit=200&skip=${skip}&pretty=on`)
    .then(response => response.json())
    .then(data => {
        return res.send(data);
    })
})

http.createServer(app).listen(process.env.PORT || 5000)
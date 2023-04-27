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

    fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&city=Atlanta&limit=50&pretty=on`)
    .then(response => response.json())
    .then(data => {
        return res.send(data);
    })
})

http.createServer(app).listen(process.env.PORT || 5000)
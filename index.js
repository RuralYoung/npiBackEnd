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
    let skip = req.query.skip;
    let firstName = req.query.first_name;
    let lastName = req.query.last_name;
    let npiNum = req.query.number;
    let city = req.query.city;
    let state = req.query.state;
    let zip = req.query.postal_code;

    fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&first_name=${firstName}&last_name=${lastName}&number=${npiNum}&city=${city}&state=${state}&postal_code=${zip}&limit=200&skip=${skip}&pretty=on`)
        .then(response => response.json())
        .then(data => {
            return res.send(data);
        })
})

http.createServer(app).listen(process.env.PORT || 5000)
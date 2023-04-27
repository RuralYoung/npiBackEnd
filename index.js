const express = require('express');

const app = express();

const npiData = require('./npiData.js');

app.use('/npiData', npiData);

app.listen(5000)
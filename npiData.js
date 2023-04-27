const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
    fetch(`https://npiregistry.cms.hhs.gov/api/?version=2.1&city=Atlanta&limit=50`)
    .then(response => response.json())
    .then((usefulData) => {
        res.json(usefulData);
    })
});
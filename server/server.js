const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
// const createRouter = require('./helpers/create_router.js');



app.listen(5000, function() {
  console.log(`M-apps server running on port ${this.address().port}`);
});

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require("cors");

app.use(cors())

app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('mapps');
    const countriesCollection = db.collection('countries');
    app.use('/api/countries', createRouter(countriesCollection));
  })
  .catch(console.error);

app.listen(5000, function () {
  console.log(`M-apps server running on port ${this.address().port}`);
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./MongooseConnection/db')
const app = express();
app.use(cors());



app.use(bodyParser.json());
app.use('/users', require('./Routers'));



const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

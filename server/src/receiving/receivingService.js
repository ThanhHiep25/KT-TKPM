const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const receivingRoutes = require('./routes/receivingRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/receiving', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/receiving', receivingRoutes);

app.listen(3002, () => {
    console.log('Receiving Service listening on port 3002');
});

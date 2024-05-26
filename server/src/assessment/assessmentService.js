const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const assessmentRoutes = require('./routes/assessmentRoutes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/assessment', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/assessment', assessmentRoutes);

app.listen(3003, () => {
    console.log('Assessment Service listening on port 3003');
});

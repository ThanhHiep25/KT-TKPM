const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const reportingRoutes = require('./routes/reportingRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/reporting', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/reporting', reportingRoutes);

app.listen(3005, () => {
    console.log('Reporting Service listening on port 3005');
});

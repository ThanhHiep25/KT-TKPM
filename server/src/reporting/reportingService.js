const express = require('express');
const bodyParser = require('body-parser');
const reportingRoutes = require('./routes/reportingRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/reporting', reportingRoutes);

app.listen(3005, () => {
    console.log('Reporting Service listening on port 3005');
});

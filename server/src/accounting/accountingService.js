// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const accountingRoutes = require('./routes/accountingRoutes');
const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/accounting', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use('/account', accountingRoutes);

app.listen(3004, () => {
    console.log('Accounting Service listening on port 3004');
});

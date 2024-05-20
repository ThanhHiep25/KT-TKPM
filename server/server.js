const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const www = process.env.WWW || './';

app.use(express.json());
app.use(express.static(www));
console.log(`serving ${www}`);

app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: www });
});

app.post('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.put('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.delete('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.patch('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.options('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.head('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.all('*', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`Start on http://localhost:${port}`));

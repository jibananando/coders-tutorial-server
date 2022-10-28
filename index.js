const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');

app.get('/', (req, res) => {
    res.send('Coders API Running');
});

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = categories.find(c => c.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Coders Server running on port', port);
})
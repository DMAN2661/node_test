const express = require('express');
const app = express();
const { readFile } = require('fs').promises;


app.get('/', async (req, res) => {

    res.send(await readFile('./html/home.html', 'utf8'));
});

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running on port http://localhost:8080');
});


const express = require('express');
const app = express();

app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'client' });
});

app.listen(3000, () => {
    console.log('server was started');
});

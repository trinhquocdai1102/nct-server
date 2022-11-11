const express = require('express');
const favoriteRouter = require('./routes/Favorite');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;
const APICommon = '/api/v1';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(`${APICommon}/favorite`, favoriteRouter);
app.use('/', () => {
    res.json('home');
});

app.listen(PORT, console.log(`Listening on port ${PORT}...`));

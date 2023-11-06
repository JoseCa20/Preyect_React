const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const {momgoose} = require('./database');

app.set('Port', 3001);

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/routes'));

//app.use(express.static(path.join(__dirname, 'build')));

app.use(cors({
    origin: "*",
    })
);

app.listen(app.get('Port'), () => {
    console.log('escuchando por el puerto:', app.get('Port'));
})

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
})
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('./database');

app.set('Port', 4000);

app.use(morgan('dev'));
app.use(cors({
    origin: "*",
    })
);

app.listen(app.get('Port'), () => {
    console.log('escuchando por el puerto:', app.get('Port'));
})
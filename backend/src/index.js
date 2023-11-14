const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const {momgoose} = require('./database');
const usuarios = require('./models/usuarios');

app.set('Port', 3001);

app.use(morgan('dev'));
app.use(bodyParser.json());

dotenv.config();


app.use('/', require('./routes/productos.routes'));
app.use('/', require('./routes/usuarios.routes'));


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

app.post('/login', async(req, res) => {
    const { email, password } = req.body;

    const usuario = await usuarios.findOne({ email, password }).exec();

    if(usuario){
        const token = jwt.sign({ email: usuario.email }, process.env.Jwt_Secret, { expiresIn: process.env.Jwt_Expiration });
        const cookieOptions = {
            expires: new Date(Date.now() + process.env.Jwt_Cookies_Expires * 24 * 60 * 1000)            
        }
        res.cookie("jwt", token, cookieOptions);
        res.json({ token, redirectTo: '/' });
    }else{
        res.status(401).json({ error: 'Credenciales inválidas' });
    }
})
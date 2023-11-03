const mongoose = require('mongoose');

URI = ('mongodb://localhost/ecommerce');

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('conexion establecida'))
    .catch(error => console.log(error));

module.exports = mongoose;
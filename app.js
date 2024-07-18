require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersRouter = require('./controllers/User');
const loginRouter = require('./controllers/login');
const logoutRouter = require('./controllers/logout');
const { PAGE_URL } = require('./config');
const { MONGO_URI } = require('./config');
const productRouter = require('./controllers/product');
const cartRouter = require('./controllers/cart');
const eventRouter = require('./controllers/events');
const { userExtractor } = require('./middleware/auth');


(async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('conectado a mongodb');
    } catch (error) {
        console.log(error);
    }
})();

module.exports = app;

app.use(cors());
app.use(express.json());
app.use(cookieParser());


//Rutas frontend


app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/images', express.static(path.resolve('imagenes')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/uploads', express.static(path.resolve('uploads')));

//Admin
app.use('/dashboard', express.static(path.resolve('views', 'dashboard')));
app.use('/events', express.static(path.resolve('views', 'events')));
app.use('/productos', express.static(path.resolve('views', 'products')));

//Cliente
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/comprar', express.static(path.resolve('views', 'comprar')));
app.use('/carrito', express.static(path.resolve('views', 'carrito')));
app.use('/comprar/:id', express.static(path.resolve('views', 'details')));

app.use('/eventos', express.static(path.resolve('views', 'eventos')));


app.use(bodyParser.json());
app.use(morgan('tiny'));


//Rutas Backend
app.use('/api/products', productRouter);
app.use('/api/events', eventRouter);
app.use('api/cart', cartRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);

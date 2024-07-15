const cartRouter = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');
const Cart = require('../models/cart');

cartRouter.post('/', async (request, response) => {
    const products = await Product.findById(request.params.id)
    
        if (!products || !quantity) {
            return response.status(400).json({ error: 'Al menos un producto es requerido' });
        }
        const newCart = new Cart({
            products,
        })
        const savedCart = await newCart.save();
        return response.status(201).json(savedCart)
    
    });

    module.exports = cartRouter;
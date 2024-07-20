const ordersRouter = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');
const Order = require('../models/order');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

//Post order
ordersRouter.post('/', async (request, response) => {
    const { products, user, total, pago } = request.body;
    if (!products || !user || !total ) {
            return response.status(400).json({ error: 'No puede agregarse al checkout' });
        }
        const newOrder = new Order({
            products,
            user,
            total,
            pago
        })
        const savedOrder = await newOrder.save();
        return response.status(201).json(savedOrder)
});

//Get all orders
  ordersRouter.get('/', async (request, response) => {
        const orderList = await Order.find({})
        return response.status(201).json(orderList);
    });

//Get individual order
ordersRouter.get('/:id', async (request, response) => {
    const orderId = request.params.id;
    try {
      const order = await Order.findById(orderId).populate('products');
      if (order) {
        return response.json(order);
      } else {
        return response.status(404).send('Product not found');
      }
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  });
    module.exports = ordersRouter;

    //Actualizar
    ordersRouter.patch('/:id', async (request, response) => {
        const updateParams = {
            products: request.body.products,
            user: request.body.user,
            total: request.body.total,
            pago: request.body.pago,
        }
        const updatedOrder = await Order.findByIdAndUpdate(request.params.id, updateParams, { new: true }).populate('user');
        if (!updatedOrder) {
            return response.status(500).json({ error: 'No se ha podido actualizar' });
        }
        if (updatedOrder.pago === true) {
            const user = updatedOrder.user;
            await transporter.sendMail({
                from: process.env.EMAIL_USER, // sender address
                to:  user.email,// list of receivers
                subject: "Confirmacion de pago", // Subject line
                html: `<p>Gracias por tu compra en Casadobleve! tu pago esta en status de pendiente y lo confirmaremos lo mas pronto posible</p>`, // html body
            });
        }
        return response.status(201).json('Se ha registrado su pago exitosamente')
    });
    
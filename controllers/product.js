const upload = require('../utils/multer');
const productRouter = require('express').Router();
const User = require('../models/user');
const Product = require('../models/product');
const { userExtractor } = require('../middleware/auth');


// Insertar productos
productRouter.post('/',upload.single('image'), userExtractor, async (request, response) => {
if (request.user.rol !== 'admin') {
    return response.sendStatus(401)
}
    const file = request.file;
    const { name, price, description, stock} = request.body;

    if (!name || !price || !description || !stock) {
        return response.status(400).json({ error: 'Todos los campos son requeridos' });
    }
    const newProduct = new Product({
        name,
        price,
        description,
        stock,
        image: file.filename,
    })
    const savedProduct = await newProduct.save();
    return response.status(201).json(savedProduct)

});

// Obtener todos los productos
productRouter.get('/', async (request, response) => {
    const productList = await Product.find({});
    return response.status(201).json(productList);
});

// Obtener un(1) producto

productRouter.get('/:id', async (request, response) => {
    const productId = request.params.id;
  
    try {
      const product = await Product.findById(productId);
  
      if (product) {
        return response.json(product); // Send product details as JSON
      } else {
        return response.status(404).send('Product not found');
      }
    } catch (error) {
      console.error(error);
      return response.status(500).send('Internal Server Error');
    }
  });
  ;

  //Comprar producto
  // productRouter.get('comprar/:id', async (request, response) => {
  //   const productId = request.params.id;
  
  //   try {
  //     const product = await Product.findById(productId);
  
  //     if (product) {
  //       return response.json(product); // Send product details as JSON
  //     } else {
  //       return response.status(404).send('Product not found');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return response.status(500).send('Internal Server Error');
  //   }
  // });
  // ;

//Actualizar Producto
productRouter.patch('/:id', async (request, response) => {
    const updateParams = {
        name: request.body.name,
        price: request.body.price,
        description: request.body.description,
        stock: request.body.stock,
        image: request.body.image
    }
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, updateParams, { new: true });
    if (!updatedProduct) {
        return response.status(500).json({ error: 'No se ha podido actualizar' });
    }
    return response.status(201).json(updatedProduct)
});

//Eliminar producto
productRouter.delete('/:id', async (request, response) => {
    const deletedProduct = await Product.deleteOne({_id: request.params.id});
    if (!deletedProduct) {
        return response.status(500).json({ error: 'No se ha podido eliminar' });
    }
    return response.status(201).json('Producto ha sido eliminado')
});


module.exports = productRouter;
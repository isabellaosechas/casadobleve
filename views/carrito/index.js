
const tableBody = document.querySelector('#table-body');
const resumen = document.querySelector('#resumen');
let carrito = {
  products: [],
  user: false,
  pago: false,
}
let total = 0;

//Resumen 
const crearResumen = () => {
    resumen.innerHTML=`
    <h2 class="text-lg font-semibold mb-4">Summary</h2>
                            <div class="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>$19.99</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Taxes</span>
                                <span>$1.99</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span>Shipping</span>
                                <span>$0.00</span>
                            </div>
                            <hr class="my-2">
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Total</span>
                                <span class="font-semibold">$21.98</span>
                            </div>
                            <button id="checkout" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
    `;
};
crearResumen()

// pro.reduce(acc, next => acc + next.price, 0)
//Mostrar Carrito
const renderCart = () => {
    tableBody.innerHTML = '';
    const num = Number('10$'.replace('$', ''));

    // const total = carritoItems.reduce((acc, next) => acc + Number(next.price.replace('$', '')), 0);
    // console.log(carrito);
    // console.log(subtotal);
    carrito.products.forEach(item => {
        const subtotal = item.qnty * Number(item.price.replace('$', ''));
        console.log(subtotal);
        const tr = document.createElement('tr');
        tr.id = item._id;
        tr.innerHTML = `
        <tr>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="h-16 w-16 mr-4" src="/uploads/${item.image}" alt="Product image">
                                            <span class="font-semibold">${item.name}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">${item.price}</td>
                                    <td class="py-4">
                                        <div id="seccion-cantidad" class="flex items-center">
                                            <button id="decrement" class="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span id="cantidad" class="text-center w-8">${item.qnty}</span>
                                            <button id="add" class="border rounded-md py-2 px-4 ml-2">+</button>
                                        </div>
                                    </td>
                                    <td class="py-4">${subtotal}</td>
                                </tr>
        `;
        tableBody.append(tr);
    });

};

//Traer carrito
(() => {
    const carritoStringArray = localStorage.getItem('carrito');
    if (carritoStringArray) {
      carrito = JSON.parse(carritoStringArray);  
    }
    renderCart();
    
  })();

  
//Cantidad funcionamiento
tableBody.addEventListener('click', e => {
  const restar = e.target.closest('#decrement');
  const add = e.target.closest('#add');

   if (restar){
    const id = restar.parentElement.parentElement.parentElement.id;
    const product = carrito.products.find(p => p._id === id);
    const updatedProduct = {...product, qnty: product.qnty - 1};
    if (product.qnty > 1) {
      const updatedProducts = carrito.products.map(p => {
        if (p._id === updatedProduct._id) {
          return updatedProduct;
        } else {
          return p;
        }
        });
        carrito = {...carrito, products: updatedProducts};
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    renderCart();
  }

  if (add) {
    const id = add.parentElement.parentElement.parentElement.id;
    const product = carrito.products.find(p => p._id === id);

    if (product.qnty < Number(product.stock)) {
      const updatedProduct = {...product, qnty: product.qnty + 1};
      const updatedProducts = carrito.products.map(p => {
        if (p._id === updatedProduct._id) {
          return updatedProduct;
        } else {
          return p;
        }
        });
        carrito = {...carrito, products: updatedProducts};
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderCart();
    }
  }
}); 

//Checkout
  const checkout = document.getElementById('checkout');
  checkout.addEventListener('click', () => {
    console.log('hola');

  });
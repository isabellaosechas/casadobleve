
const tableBody = document.querySelector('#table-body');
const resumen = document.querySelector('#resumen');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let carrito = {
  products: [],
  user: false,
  pago: false,
}

//Resumen 
const crearResumen = () => {
  // Sumar total
    let total = 0;
    carrito.products.forEach(item => {
     total += item.qnty * Number(item.price.replace('$', ''));
     });

     //Mostrar
    resumen.innerHTML=`
    <h2 class="text-lg font-semibold mb-2">Resumen</h2>
                            <div class="flex justify-between mb-2">
                                <span class="font-semibold">Total</span>
                                <span class="font-semibold">${total}$</span>
                            </div>
                            <button id="checkout" class="bg-[#C9C26B] hover:bg-[#afa74f] text-white py-2 px-4 mt-4 w-full">Ir a pagar</button>
    `;
};

//Mostrar Carrito
const renderCart = () => {
    tableBody.innerHTML = '';
    carrito.products.forEach(item => {
      let subtotal = []
        subtotal = item.qnty * Number(item.price.replace('$', ''));
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
                                            <button id="decrement" class="border rounded-md py-2 px-2">-</button>
                                            <span id="cantidad" class="text-center w-8">${item.qnty}</span>
                                            <button id="add" class="border rounded-md py-2 px-2">+</button>
                                        </div>
                                    </td>
                                    <td class="py-4">${subtotal}$</td>
                                    <td class="py-4">
                                    <div class="flex items-center">
                                    <button id="delete-btn" class="hover:text-gray-900">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                       stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                  </svg>
                                  </button>
                                  </div>
                                  </td>
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
    crearResumen();
    
  })();

//Cantidad funcionamiento
tableBody.addEventListener('click', e => {
  const restar = e.target.closest('#decrement');
  const add = e.target.closest('#add');
  const deleteProduct = e.target.closest('#delete-btn');

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
    crearResumen();
  };  

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
        crearResumen();
    }
  };

  if (deleteProduct) {
    const id = deleteProduct.parentElement.parentElement.parentElement.id;
    const products = carrito.products.filter(p => p._id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    carrito = {...carrito, products};
    renderCart();
    crearResumen();
  }
}); 

//Vaciar Carrito
vaciarCarrito.addEventListener('click', e => {
  console.log('hola');;
})

const total0 = resumen.children[1].children[1].innerHTML
const total = Number(total0.replace('$', ''));

//Checkout
  const checkout = document.getElementById('checkout');
  checkout.addEventListener('click', async e => {
    e.preventDefault();
  try {
    const newOrder = {
      products: carrito.products,
      user: carrito.user,
      total: total,
      pago: false,
    }

      const { data } = await axios.post('/api/orders', newOrder);
      const id = data._id;
      console.log(data);
      window.location.pathname = `/checkout/${id}`;

  } catch (error) {
    window.location.pathname = `/login`;
    console.log("Para realizar una compra debe iniciar sesion");
    console.log(error);
  }

  });
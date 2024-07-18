
const tableBody = document.querySelector('#table-body');
const resumen = document.querySelector('#resumen');
let carrito = [];
let carritoItems = []
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

//Mostrar Carrito
const renderCart = () => {
    tableBody.innerHTML = '';
    carritoItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <tr>
                                    <td class="py-4">
                                        <div class="flex items-center">
                                            <img class="h-16 w-16 mr-4" src="/uploads/${item.product.image}" alt="Product image">
                                            <span class="font-semibold">${item.product.name}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">${item.product.price}</td>
                                    <td class="py-4">
                                        <div id="seccion-cantidad" class="flex items-center">
                                            <button id="decrement" class="border rounded-md py-2 px-4 mr-2">-</button>
                                            <span id="cantidad" class="text-center w-8">${item.qy}</span>
                                            <button id="add" class="border rounded-md py-2 px-4 ml-2">+</button>
                                        </div>
                                    </td>
                                    <td class="py-4"></td>
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
    carritoItems = carrito.products;
    renderCart();
    
  })();

  
//Cantidad funcionamiento

const cantidadInput = document.querySelector('#cantidad')
let value = Number(cantidadInput.innerHTML);
const cantidadSection = document.querySelector('#seccion-cantidad');
cantidadSection.addEventListener('click', e => {
  const restar = e.target.closest('#decrement');
  const add = e.target.closest('#add');
  if (restar){
    value--;
    cantidadInput.innerHTML = value;
  } else if (add) {
    value++;
    cantidadInput.innerHTML = value;
  }
  carrito = {...carrito, qy: cantidadInput.innerHTML};
  
}); 

//Checkout
  const checkout = document.getElementById('checkout');
  checkout.addEventListener('click', () => {
    console.log('hola');

  });
const productoDetalles = document.querySelector('#detalles-producto');
const pageUrl = window.location.href;
const pageUrlArray = pageUrl.split('/');
const id = pageUrlArray[4]

let producto = [];

let carrito = {
  products: [],
  user: false,
  pago: false,
};

// Conseguir id del producto
const { data } = await axios.get(`/api/products/${id}`);
producto = data;

//Render product
productoDetalles.innerHTML=`
 <div class="flex flex-col md:flex-row mx-2">
                    <div class="md:flex-1 md:px-4">
                        <div class="h-[460px] rounded-lg mb-4">
                            <img class="w-full h-full object-cover" src="/uploads/${producto.image}"  alt="Imagen producto">
                        </div>
                    </div>
                    <div class="md:flex-1 px-4">
                        
                        <div class="flex flex-row md:flex-col md:justify-start justify-between mb-2">
                            <h2 class="text-2xl font-bold mb-2">${producto.name}</h2>
                            <div class="mr-4">
                                <span class="text-xl font-bold text-orange-400">${producto.price}</span>
                            </div>
                        </div>       
                            <p class="text-sm mt-2">
                            ${producto.description}
                            </p>
                            <div class="mt-4">
                            <span class="font-bold">Cantidad:</span>
                            <div id="seccion-cantidad" class="flex items-center">
                                <button id="decrement" class="border bg-white rounded-md py-2 px-2">-</button>
                                <span id="cantidad" class="text-center w-8">1</span>
                                <button id="add" class="border rounded-md bg-white py-2 px-2">+</button>
                            </div>
                            <button id="checkout" class="bg-[#C9C26B] hover:bg-[#afa74f] text-white py-2 px-4 mt-4 md:mt-12 w-full">Agregar al carrito</button>
                    </div>
                </div>
            </div>
`;
//Cantidad funcionamiento
const cantidadInput = document.querySelector('#cantidad')
let value = Number(cantidadInput.innerHTML);


const cantidadSection = document.querySelector('#seccion-cantidad');
cantidadSection.addEventListener('click', e => {
  const restar = e.target.closest('#decrement');
  const add = e.target.closest('#add');
  if (restar){
    if (value > 1) {
      value--;
    }
    cantidadInput.innerHTML = value;
  } else if (add) {
    value++;
    cantidadInput.innerHTML = value;
  }
}); 

const user = JSON.parse(localStorage.getItem('currentUser'));

//Anadir al carrito
const addBtn = document.querySelector('#checkout');
addBtn.addEventListener('click', async e =>{
    e.preventDefault();
    const qnty = cantidadInput.innerHTML;
    const newProduct = {...producto, qnty: Number(qnty)};
    const oldProducts = carrito.products;
    const productExist = oldProducts.find(p => p._id === producto._id);
    if (productExist) {
      const updatedProduct = {...productExist, qnty: Number(qnty)};
      const updatedProducts = oldProducts.map(p => {
        if (p._id === updatedProduct._id) {
          return updatedProduct;
        } else {
          return p;
        }
      });
      carrito = {...carrito, products: updatedProducts};
      localStorage.setItem('carrito', JSON.stringify(carrito));
      return;
    }
    const updatedProducts = oldProducts.concat(newProduct);
    carrito = {...carrito, products: updatedProducts};
    if (user) {
      carrito = {...carrito, user: user.id}
    };
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(carrito);
});

//Traer carrito
(() => {
  const carritoStringArray = localStorage.getItem('carrito');
  if (carritoStringArray) {
    carrito = JSON.parse(carritoStringArray);  
  }
})();



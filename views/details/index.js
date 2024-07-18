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
 <div class="">
          <div class="">
            <img class=" " src="/uploads/${producto.image}" alt="">
          </div>
          <!-- Datos -->
            <div class="flex flex-row items-center mx-4 justify-between bg-primary-background text-primary-text section-x-padding lg:col-span-5">
                <h1  class=" mt-4 break-words font-heading text-2xl lg:text-3xl">${producto.name}</h1>
                <span class="mt-4 text-2xl">${producto.price}</span>
            </div>
            <div class="mt-4 mx-4">
                <p>${producto.description}</p>
            </div>
            <!-- Cantidad -->
           <div class="custom-number-input h-10 w-32">
  <div id="seccion-cantidad" class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
    <button id="decrement" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" id="cantidad" class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700" name="custom-input-number" value="1"></input>
  <button id="add" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>
</div>
        
        <!-- Cierra el div -->
            </div> 
            <!-- Agregar al carrito -->
            <div>
                <form id="add-form" action="">
                    <button id="btn-form"
                    class="py-2 w-full mx-2 my-8 text-center justify-center bg-orange-500 border rounded-md text-white  hover:bg-orange-700 hover:text-gray-100"
                    type="submit">Agregar</button>
                </form>  
            </div>  
     </div> 
`;
//Cantidad funcionamiento
const cantidadInput = document.querySelector('#cantidad')
let value = Number(cantidadInput.value);

const cantidadSection = document.querySelector('#seccion-cantidad');
cantidadSection.addEventListener('click', e => {
  const restar = e.target.closest('#decrement');
  const add = e.target.closest('#add');
  if (restar){
    value--;
    cantidadInput.value = value;
  } else if (add) {
    value++;
    cantidadInput.value = value;
  }
}); 

const user = JSON.parse(localStorage.getItem('currentUser'));

//Anadir al carrito
const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', async e =>{
    e.preventDefault();
    const product = producto
    const qnty = cantidadInput.value;
    const oldProducts = carrito.products;
    const newProducts = oldProducts.concat({ qy: qnty, product: product });
    carrito = {...carrito, products: newProducts};
    if (user) {
      carrito = {...carrito, user: user.id}
    };

    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(carrito);
    
  


})



const productoDetalles = document.querySelector('#detalles-producto');
const pageUrl = window.location.href;
const pageUrlArray = pageUrl.split('/');
const id = pageUrlArray[3]

let producto = [];

// Conseguir id del producto
const { data } = await axios.get(`/api/products/${id}`);
producto = data;

productoDetalles.innerHTML=`
 <div class="">
          <div class="">
            <img class=" " src="http://localhost:3003/uploads/${producto.image}" alt="">
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
            <div class="mt-8 mx-4 flex-col flex gap-2">
                <label class="">Cantidad:</label>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-orange-50 border border-gray-300 rounded p-3 h-11 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-orange-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5 " placeholder="1" required />
                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-orange-50 border border-gray-300 rounded p-3 h-11 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
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

const addForm = document.querySelector('#add-form');
addForm.addEventListener('submit', async e =>{
    e.preventDefault();
  try {
    const newCart = {
      products: producto.id,
    }
    const { data } = await axios.post('/api/cart', newCart);
    console.log(data);

  } catch (error) {
    console.log("no se ha podido agregar");
    console.log(error);
  }


})



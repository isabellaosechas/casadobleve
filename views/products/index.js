const form = document.querySelector('#form-product');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const nombreInput = document.querySelector('#nombre-producto');
const precioInput = document.querySelector('#precio-producto');
const descripcionInput = document.querySelector('#descripcion-producto');
const stockInput = document.querySelector('#stock-producto');
const imagenInput = document.querySelector('#imagen-producto');
const tableBody = document.querySelector('#tbody');
const openContactFormButton = document.querySelector('#openContactForm');
const closeContactFormButton = document.querySelector('#closeContactForm');
const contactFormModal = document.querySelector('#modelConfirm');
const openFilterFormButton = document.querySelector('#openFilterForm');
const filterFormModal = document.querySelector('#modelFilter');
const closeFilterFormButton = document.querySelector('#closeFilterForm');
const filterForm = document.querySelector('#form-filter');
const closeEditModal = document.querySelector('#closeEditModal');
const editModal = document.querySelector('#editModal');


(async () => {
  const { data } = await axios.get('/api/products');
})();

let products = [];
let filtered = [];
let editedproducts = [];
// let checked = [];

// Modal agregar productos

 openContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.remove('hidden');
    });

    closeContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.add('hidden');
    });

// Modal filtrar productos

  openFilterFormButton.addEventListener('click', () => {
    filterFormModal.classList.remove('hidden');
  });

  closeFilterFormButton.addEventListener('click', () => {
    filterFormModal.classList.add('hidden');
  });

// Mostrar Productos

const renderProducts = (products) => {
  tableBody.innerHTML = '';
  products.forEach(product =>  {
    // Crear elemento
    const lista = document.createElement('tr');
    lista.id = product._id;
    lista.innerHTML = `
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      <p>${product.name}</p>
                     </td>
                     <td  class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                     <p>${product.price}</p>
                     </td>
                     <td  class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                     <p>${product.description}</p>
                     </td>
                     <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      <p>${product.stock}</p>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      <p>${product.image}</p>
                      </td>
                      <td class="flex flex-row gap-4 p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                      <button class="edit-btn hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
                      </button>
                      <button class="delete-btn hover:text-gray-900">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
                      </td>

      `;
    tableBody.append(lista);
  });

}

// Anadir nuevo producto
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newProduct = {
      name: nombreInput.value,
      price: precioInput.value,
      description: descripcionInput.value,
      stock: stockInput.value,
      image: imagenInput.files[0],
    }
    const bodyFormData = new FormData();
  
    for (const key in newProduct) {
      bodyFormData.append(key, newProduct[key]);
    }
  
    const { data } = await axios.post('/api/products', bodyFormData, {
      withCredentials: true
    });
    
    products = products.concat(data);
    renderProducts(products);
    contactFormModal.classList.add('hidden');


    nombreInput.value = '';
    precioInput.value = '';
    descripcionInput.value = '';
    stockInput.value = '';
    imagenInput.value = '';


  } catch (error) {
    console.log("no se ha podido agregar");
    console.log(error);
  }

});

// Pedir todos los productos
(async () => {
  const { data } = await axios.get('/api/products');
  products = data;
  renderProducts(products);
})();

// Editar / Eliminar

tableBody.addEventListener('click', async e => {
  const editBtn = e.target.closest('.edit-btn');
  const deleteBtn = e.target.closest('.delete-btn');

  //Eliminar

  if (deleteBtn) {
    const id = deleteBtn.parentElement.parentElement.id;
    await axios.delete(`/api/products/${id}`);
    products = products.filter(product => product._id !== id);
    renderProducts(products);
  }

  //Editar
  if (editBtn){
    editModal.classList.remove('hidden');
    if (closeEditModal) {
      closeEditModal.addEventListener('click', () => editModal.classList.add('hidden'));
    }
    const lista = editBtn.parentElement.parentElement;
    const id = editBtn.parentElement.parentElement.id;
    const name = lista.children[0].children[0];
    const price = lista.children[1].children[0];
    const description = lista.children[2].children[0];
    const stock = lista.children[3].children[0];

    const editNombre = document.querySelector('#edit-nombre');
    const editPrecio = document.querySelector('#edit-precio');
    const editDescripcion = document.querySelector('#edit-descripcion');
    const editStock = document.querySelector('#edit-stock');
    const editForm = document.querySelector('#edit-form'); 
    
    editNombre.innerHTML = name.innerHTML;
    editPrecio.innerHTML = price.innerHTML;
    editDescripcion.innerHTML = description.innerHTML;
    editStock.innerHTML = stock.innerHTML;

    editForm.addEventListener('submit', async e => {
      e.preventDefault();
      const { data} = await axios.patch(`/api/products/${id}`, {name: editNombre.innerHTML, price: editPrecio.innerHTML,  description: editDescripcion.innerHTML, stock: editStock.innerHTML});
        products = products.map(product => {
          if (product._id === data._id) {
            return data;
          } else {
            return product;
          } 
        });
        console.log(products);
        renderProducts(products);
        editModal.classList.add('hidden');  
    });

   
  

  }
//   if (editBtn){
//     const lista = editBtn.parentElement.parentElement;
//     const id = editBtn.parentElement.parentElement.id;
    // const name = lista.children[0].children[0];
    // const price = lista.children[1].children[0];
    // const description = lista.children[2].children[0];
    // const stock = lista.children[3].children[0];
//     const image = lista.children[4].children[0];
    
//     if (lista.classList.contains('editando')){
//         // Logica de negocio
        // await axios.patch(`/api/products/${id}`, {name: name.innerHTML, price: price.innerHTML,  description: description.innerHTML, stock: stock.innerHTML, image: image.innerHTML});
        // products = products.map(product => {
        //   if (product._id === Number(lista.id)) {
        //     return {...product, name: name.innerHTML, price: price.innerHTML, description: description.innerHTML, stock: stock.innerHTML, image: image.innerHTML}
        //   } else {
        //     return product
        //   }
//         });
 
        
//         // Logica del renderizado
//         lista.classList.remove('editando');
//         name.removeAttribute('contenteditable');
//         price.removeAttribute('contenteditable');
//         description.removeAttribute('contenteditable');
//         stock.removeAttribute('contenteditable');
//         image.removeAttribute('contenteditable');

//         name.classList.remove('outline-indigo-700', 'outline-2', 'outline');
//         price.classList.remove('outline-indigo-700', 'outline-2', 'outline');
//         description.classList.remove('outline-indigo-700', 'outline-2', 'outline');
//         stock.classList.remove('outline-indigo-700', 'outline-2', 'outline');
//         image.classList.remove('outline-indigo-700', 'outline-2', 'outline');
//         editBtn.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
// </svg>
//         `;
//       } else {
//         editBtn.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
// </svg>

//         `;
//         lista.classList.add('editando');
//         name.setAttribute('contenteditable', true);
//         price.setAttribute('contenteditable', true);
//         description.setAttribute('contenteditable', true);
//         stock.setAttribute('contenteditable', true);
//         image.setAttribute('contenteditable', true);

//         name.classList.add('outline-indigo-700', 'outline-1', 'outline');
//         price.classList.add('outline-indigo-700', 'outline-1', 'outline');
//         description.classList.add('outline-indigo-700', 'outline-1', 'outline');
//         stock.classList.add('outline-indigo-700', 'outline-1', 'outline');
//         image.classList.add('outline-indigo-700', 'outline-1', 'outline');
//       }
//     }
  });


// Buscar Producto
searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const search = searchInput.value.toLowerCase();
  filtered = products.filter(product => product.name.toLowerCase().startsWith(search));
  renderProducts(filtered);
});

// Buscar Producto
searchInput.addEventListener('input', async e => {
  e.preventDefault();
  const search = searchInput.value.toLowerCase();
  filtered = products.filter(product => product.name.toLowerCase().startsWith(search));
  renderProducts(filtered);
});

// Filtrar producto

filterForm.addEventListener('submit', async e => {
  e.preventDefault();
  filterFormModal.classList.add('hidden');
  const checkedValue = document.querySelector('.tag-checked:checked').value;
  filtered = products.filter(product => product.name.toLowerCase().startsWith(checkedValue));
  if (checkedValue === 'todo') {
    filtered = products;
  };
  renderProducts(filtered);
})

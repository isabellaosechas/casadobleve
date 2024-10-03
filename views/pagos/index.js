const tableBody = document.querySelector('#tbody');
let pagos = [];

  const renderPagos = (pagos) => {
    tableBody.innerHTML = '';
   
    pagos.forEach(pago =>   {
      const lista = document.createElement('tr');
      lista.id = pago._id;
      lista.innerHTML = `
                        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        <p></p>
                       </td>
                       <td  class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                       <p>${pago.banco}</p>
                       </td>
                       <td  class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                       <p>${pago.telefono}</p>
                       </td>
                       <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        <p>${pago.ref}</p>
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        <p>${pago.fecha}</p>
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        <p>${pago.status}</p>
                        </td>
                        <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        <p></p>
                        </td>
                        <td class="flex flex-row gap-4 p-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                        <button class="edit-btn hover:text-gray-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
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
  
  };

  
// Pedir todos los pagos
(async () => {
    const { data } = await axios.get('/api/pagos');
    pagos = data;
    renderPagos(pagos);
  })();
  
// editar// eliminar
 tableBody.addEventListener('click', async e => {
  const editBtn = e.target.closest('.edit-btn');
  const deleteBtn = e.target.closest('.delete-btn');

  //Eliminar

  if (deleteBtn) {
    const id = deleteBtn.parentElement.parentElement.id;
    await axios.delete(`/api/pagos/${id}`);
    pagos = pagos.filter(pago => pago._id !== id);
    renderPagos(pagos);
  }

  //Editar
  if (editBtn){
    // editModal.classList.remove('hidden');
    // if (closeEditModal) {
    //   closeEditModal.addEventListener('click', () => editModal.classList.add('hidden'));
    // }
    let pago = [];
    const lista = editBtn.parentElement.parentElement;
    const id = editBtn.parentElement.parentElement.id;
    const { data } = await axios.get(`/api/pagos/${id}`);
    pago = data;
    
    console.log(pago);
    

    const pagoUsuario = document.querySelector('#pago-user');
    const pagoBanco = document.querySelector('#pago-banco');
    const pagoTelefono = document.querySelector('#pago-telefono');
    const pagoRef = document.querySelector('#pago-ref');
    const pagoFecha = document.querySelector('#pago-fecha'); 
    
  
    // editForm.addEventListener('submit', async e => {
    //   e.preventDefault();
    //   const { data} = await axios.patch(`/api/products/${id}`, {name: editNombre.innerHTML, price: editPrecio.innerHTML,  description: editDescripcion.innerHTML, stock: editStock.innerHTML});
    //     products = products.map(product => {
    //       if (product._id === data._id) {
    //         return data;
    //       } else {
    //         return product;
    //       } 
    //     });
    //     console.log(products);
    //     renderProducts(products);
    //     editModal.classList.add('hidden');  
    // });
  }
  });
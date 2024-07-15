const form = document.querySelector('#form-product');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const nombreInput = document.querySelector('#nombre-evento');
const fechaInput = document.querySelector('#fecha-evento');
const precioInput = document.querySelector('#precio-evento');
const cuposInput = document.querySelector('#cupos-evento');
const lugarInput = document.querySelector('#lugar-evento');
const imagenInput = document.querySelector('#imagen-evento');
const tableBody = document.querySelector('#tbody');
const openContactFormButton = document.querySelector('#openContactForm');
const closeContactFormButton = document.querySelector('#closeContactForm');
const contactFormModal = document.querySelector('#modelConfirm');
const openFilterFormButton = document.querySelector('#openFilterForm');
const filterFormModal = document.querySelector('#modelFilter');
const closeFilterFormButton = document.querySelector('#closeFilterForm');

(async () => {
  const { data } = await axios.get('/api/products');
})();

let events = [];
let filtered = [];

// Modal agregar Eventos

 openContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.remove('hidden');
    });

    closeContactFormButton.addEventListener('click', () => {
        contactFormModal.classList.add('hidden');
    });

// Modal filtrar eventos

  openFilterFormButton.addEventListener('click', () => {
      filterFormModal.classList.remove('hidden');
  });

  closeFilterFormButton.addEventListener('click', () => {
      filterFormModal.classList.add('hidden');
  });


// Mostrar Eventos

const renderEvents = (events) => {
  tableBody.innerHTML = '';
  events.forEach(event =>  {
    // Crear elemento
    const lista = document.createElement('tr');
    lista.id = event._id;
    lista.innerHTML = `
                      <td id="body-name" class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${event.name}
                     </td>
                     <td id="body-date" class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                     ${event.date}
                     </td>
                     <td id="body-price" class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                     ${event.price}
                     </td>
                     <td id="body-cupos" class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${event.cupos}
                      </td>
                      <td id="body-place" class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${event.place}
                      </td>
                      <td id="body-image" class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      ${event.image}
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

// Anadir nuevo evento
form.addEventListener('submit', async e => {
  e.preventDefault();
  try {
    const newEvent = {
      name: nombreInput.value,
      date: fechaInput.value,
      price: precioInput.value,
      cupos: cuposInput.value,
      place: lugarInput.value,
      image: imagenInput.value
    }
    const { data } = await axios.post('/api/events', newEvent, {
      withCredentials: true
    });
    console.log(data);
    events = events.concat(data);
    renderEvents(events);
    contactFormModal.classList.add('hidden');


    nombreInput.value = '';
    fechaInput.value = '';
    precioInput.value = '';
    cuposInput.value - '';
    lugarInput.value = '';  
    imagenInput.value = '';


  } catch (error) {
    console.log("no se ha podido agregar");
    console.log(error);
  }

});

// Pedir todos los eventos
(async () => {
  const { data } = await axios.get('/api/events');
  events = data;
  console.log(events);
  renderEvents(events);
})();

// Editar / Eliminar

tableBody.addEventListener('click', async e => {
  const editBtn = e.target.closest('.edit-btn');
  const deleteBtn = e.target.closest('.delete-btn');

  //Eliminar

  if (deleteBtn) {
    const id = deleteBtn.parentElement.parentElement.id;
    await axios.delete(`/api/events/${id}`);
    events = events.filter(event => event._id !== id);
    renderEvents(events);
  }

  //Editar
  if (editBtn){
    const lista = editBtn.parentElement.parentElement;
    const id = editBtn.parentElement.parentElement.id;
    const name = document.querySelector('#body-name');
    const date = document.querySelector('#body-date');
    const price = document.querySelector('#body-price');
    const cupos = document.querySelector('#body-cupos');
    const place = document.querySelector('#body-place');
    const image = document.querySelector('#body-image');
    
    if (lista.classList.contains('editando')){
        // Logica de negocio
        await axios.patch(`/api/events/${id}`, {name: name.innerHTML, date: date.innerHTML,  price: price.innerHTML, cupos: cupos.innerHTML, place: place.innerHTML, image: image.innerHTML});
        events = events.map(event => {
          if (event._id === Number(lista.id)) {
            return {...event, name: name.innerHTML, date: date.innerHTML, price: price.innerHTML, cupos: cupos.innerHTML, place: place.innerHTML, image: image.innerHTML}
          } else {
            return event
          }
        });
 
        
        // Logica del renderizado
        lista.classList.remove('editando');
        name.removeAttribute('contenteditable');
        date.removeAttribute('contenteditable');
        price.removeAttribute('contenteditable');
        cupos.removeAttribute('contenteditable');
        place.removeAttribute('contenteditable');
        image.removeAttribute('contenteditable');

        name.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        date.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        price.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        cupos.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        place.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        image.classList.remove('outline-indigo-700', 'outline-2', 'outline');
        editBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>
        `;
      } else {
        editBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

        `;
        lista.classList.add('editando');
        name.setAttribute('contenteditable', true);
        date.setAttribute('contenteditable', true);
        price.setAttribute('contenteditable', true);
        cupos.setAttribute('contenteditable', true);
        place.setAttribute('contenteditable', true);
        image.setAttribute('contenteditable', true);

        name.classList.add('outline-indigo-700', 'outline-1', 'outline');
        date.classList.add('outline-indigo-700', 'outline-1', 'outline');
        price.classList.add('outline-indigo-700', 'outline-1', 'outline');
        cupos.classList.add('outline-indigo-700', 'outline-1', 'outline');
        place.classList.add('outline-indigo-700', 'outline-1', 'outline');
        image.classList.add('outline-indigo-700', 'outline-1', 'outline');
      }
    }
  });


// Buscar Evento
searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const search = searchInput.value.toLowerCase();
  filtered = events.filter(event => product.name.toLowerCase().startsWith(search));
  renderEvents(filtered);
});

// Buscar Evento
searchInput.addEventListener('input', async e => {
  e.preventDefault();
  const search = searchInput.value.toLowerCase();
  filtered = events.filter(event => event.name.toLowerCase().startsWith(search));
  renderEvents(filtered);
});
const eventGrid = document.querySelector('#event-grid');
let events = [];

// Mostrar Eventos

const renderEvents = (events) => {
    eventGrid.innerHTML = '';
    events.forEach(event =>  {
      // Crear elemento
      const lista = document.createElement('div');
      lista.id = event._id;
      lista.innerHTML = `
        <div class="flex p-4 gap-3 bg-white border border-gray-300 overflow-hidden items-center justify-start">
    
            <div class="">
                <img src="https://via.placeholder.com/150">
            </div>
        <div class="flex flex-col gap-2 w-full">
            <div class="flex flex-col gap-2 py-2">
                <p class="text-xl font-bold">${event.name}</p>
                <p class="text-xl font-bold">${event.price}</p>
                <p class="text-gray-500">${event.date}
                <p class="text-gray-500">${event.place}
                </p>
            </div>
         </div>
        </div>
        `;
      eventGrid.append(lista);
    });
  
  }
  

(async () => {
    const { data } = await axios.get('/api/events');
    events = data;
    console.log(events);
    renderEvents(events);
  })();
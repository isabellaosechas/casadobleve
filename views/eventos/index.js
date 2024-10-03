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
        <div class="flex p-4 gap-3 bg-[#fffcf9] border border-gray-300 overflow-hidden items-center justify-start">
    
            <div class="">
                <img src="/images/250x300.png">
            </div>
          <div class="flex flex-col gap-1 w-full">
              <p class="text-xl font-bold">${event.name}</p>
               <p class="text-gray-500">${event.date}             
                  <p class="text-gray-500">${event.place}</p>
                <p class="text-xl font-bold">${event.price}</p>
                <button class="p-2 md:mt-8 bg-[#C9C26B] ">Reservar</button>
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
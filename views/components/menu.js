const menu = document.querySelector('#menu');

const createMenuAdmin = () => {
    menu.innerHTML = `
     <div class="flex items-center justify-center mt-8">
               <div class="flex items-center px-6">
                  <img src="/images/logofooter.png" alt="">
               </div>
           </div>
           <!-- Menu -->
           <nav class="mt-10">
               <a class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-[#492914] " href="/dashboard">
                   <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                   </svg>
   
                   <span class="mx-3">Dashboard</span>
               </a>
   
               <a class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-[#492914]"
                   href="/pedidos">
                   <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z">
                       </path>
                   </svg>
   
                   <span class="mx-3">Pedidos</span>
               </a>
   
               <a class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-[#492914]"
                   href="/pagos">
                   <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                       </path>
                   </svg>
   
                   <span class="mx-3">Pagos</span>
               </a>
   
               <a id="productos" class="flex items-center px-6 py-2 mt-4  text-gray-100 hover:bg-[#492914]"
                   href="/productos">
                   <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                       </path>
                   </svg>
   
                   <span class="mx-3">Productos</span>
               </a>

               <a class="flex items-center px-6 py-2 mt-4  text-gray-100 hover:bg-[#492914]"
               href="/events">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                       d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                   </path>
               </svg>

               <span class="mx-3">Eventos</span>
           </a>

           <a class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-[#492914]"
           href="#">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          

           <span id="log-out" class="mx-3">Cerrar Sesion</span>
       </a>
           </nav>
    `;
};

createMenuAdmin();

const logout = document.querySelector('#log-out');
logout.addEventListener('click', async e => {
    try {
        await axios.get('/api/logout');
        localStorage.clear();
        window.location.pathname = '/'
    } catch (error) {
        console.log(error);
    }

});
const navBar = document.querySelector('#navbar');
const userExist = JSON.parse(localStorage.getItem('currentUser'));

//Navbar cliente no iniciado sesion
const createNavbarClient = () => {
    navBar.innerHTML = `
     <!-- links -->
         <!-- navbar responsive -->
          <div id="burger-menu" class="p-2 mx-2 md:p-0 hover:bg-[#F2E6D8] rounded-lg ">
            <a  class="navbar-burger self-center md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
           </a>
          </div> 

           <!--navbar Desktop  -->
            <div>
              <ul class="hidden md:flex flex-row gap-4 text-xs font-semibold">
                <li class="hover:text-orange-500"><a href="/comprar">COMPRAR</a></li>
                <li class="hover:text-orange-500"><a href="/eventos">EVENTOS</a></li>
                <li class="hover:text-orange-500"><a href="">SOBRE NOSOTROS</a></li>
                <li class="hover:text-orange-500"><a href="">CONTACTO</a></li>
              </ul>
            </div>

          <!-- Logo -->
          <div class=" flex items-stretch ml-8 md:ml-0 md:mr-4 justify-center md:justify-start text-center">
          <a class="flex justify-center md:justify-start" href="/">
          <img class="w-1/6 md:w-1/4 flex justify-center" src="/images/Logo.png" alt="LOGO">
          </a>  
          </div>  

          <!-- Iconos -->
    <div class="flex flex-row justify-end text-right px-4 md:px-0 gap-4">
      <a class="flex items-center hover:text-orange-500" href="/login">
          <!-- Inicio sesion -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      </a>
      <!-- Carrito -->
      <a class="flex items-center hover:text-orange-500" href="/carrito">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="flex absolute -mt-5 ml-4">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
      </div>

      <!-- Menu responsive -->
      <div id="menu-responsive" class="hidden md:hidden bg-[#E7782D] z-10 fixed top-24 right-24 left-0 bottom-0">
      <div class="flex justify-center mt-16">
        <ul class="flex flex-col justify-center text-left gap-6 text-xl text-orange-50 font-semibold">
          <li class=""><a href="/comprar">COMPRAR</a></li>
          <li class=""><a href="/eventos">EVENTOS</a></li>
          <li class=""><a href="">SOBRE NOSOTROS</a></li>
          <li class=""><a href="">CONTACTO</a></li>
        </ul>
      </div>
      <div class="flex flex-row justify-center py-16 gap-4">
        <div cl>
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
          <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
          </svg></a>
        </div>
        <div>
          <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
            <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M9.61133,5c-2.53462,0 -4.61133,2.07671 -4.61133,4.61133v12.77734c0,2.53462 2.07671,4.61133 4.61133,4.61133h12.77734c2.53462,0 4.61133,-2.07671 4.61133,-4.61133v-12.77734c0,-2.53462 -2.07671,-4.61133 -4.61133,-4.61133zM9.61133,7h12.77734c1.45338,0 2.61133,1.15795 2.61133,2.61133v12.77734c0,1.45338 -1.15795,2.61133 -2.61133,2.61133h-12.77734c-1.45338,0 -2.61133,-1.15795 -2.61133,-2.61133v-12.77734c0,-1.45338 1.15795,-2.61133 2.61133,-2.61133zM17,9v10c0,1.11667 -0.88333,2 -2,2c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2v-2c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4c2.19733,0 4,-1.80267 4,-4v-6.11133c0.82783,0.64109 1.80928,1.09544 2.92773,1.11133l0.0293,-2c-1.64627,-0.02339 -2.95703,-1.34577 -2.95703,-3z"></path></g></g>
            </svg></a>
        </div>
      </div>

     </div>
    `;
};

//Navbar Usuario iniciado sesion
const createNavbarUser = () => {
  navBar.innerHTML = `
   <!-- links -->
       <!-- navbar responsive -->
        <div id="burger-menu" class="p-2 mx-2 md:p-0 hover:bg-[#F2E6D8] rounded-lg ">
          <a  class="navbar-burger self-center md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
         </a>
        </div> 

         <!--navbar Desktop  -->
          <div>
            <ul class="hidden md:flex flex-row gap-4 text-xs font-semibold">
              <li class="hover:text-orange-500"><a href="/comprar">COMPRAR</a></li>
              <li class="hover:text-orange-500"><a href="/eventos">EVENTOS</a></li>
              <li class="hover:text-orange-500"><a href="">SOBRE NOSOTROS</a></li>
              <li class="hover:text-orange-500"><a href="">CONTACTO</a></li>
            </ul>
          </div>

        <!-- Logo -->
        <div class=" flex items-stretch ml-8 md:ml-0 md:mr-4 justify-center md:justify-start text-center">
        <a class="flex justify-center md:justify-start" href="/">
        <img class="w-1/6 md:w-1/4 flex justify-center" src="/images/Logo.png" alt="LOGO">
        </a>  
        </div>  

        <!-- Iconos -->
  <div class="flex flex-row justify-end text-right px-4 md:px-0 gap-4">
    <button id="user-menu" class="flex items-center hover:text-orange-500">
        <!-- Inicio sesion -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
    <!-- Carrito -->
    <a class="flex items-center hover:text-orange-500" href="/carrito">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span class="flex absolute -mt-5 ml-4">
            <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
              </span>
            </span>
    </div>

    <!-- User menu -->
     <div id="user-menuopen" class="hidden bg-[#E7782D] mr-12 lg:mr-60 z-10 fixed h-28 top-24 md:top-28 right-0 bottom-96">
    <div class="flex justify-center mt-4">
      <ul class="flex flex-col justify-center text-left gap-6 text-sm text-orange-50 font-semibold">
        <li class="">Mis compras</li>
        <li id="log-out" class="">Cerrar sesion</li>
      </ul>
    </div>
    </div>

    <!-- Menu responsive -->
      <div id="menu-responsive" class="hidden md:hidden bg-[#E7782D] z-10 fixed top-24 right-24 left-0 bottom-0">
    <div class="flex justify-center mt-16">
      <ul class="flex flex-col justify-center text-left gap-6 text-xl text-orange-50 font-semibold">
        <li class=""><a href="/comprar">COMPRAR</a></li>
        <li class=""><a href="/eventos">EVENTOS</a></li>
        <li class=""><a href="">SOBRE NOSOTROS</a></li>
        <li class=""><a href="">CONTACTO</a></li>
      </ul>
    </div>
    <div class="flex flex-row justify-center py-16 gap-4">
      <div cl>
        <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
        <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
        </svg></a>
      </div>
      <div>
        <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
          <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M9.61133,5c-2.53462,0 -4.61133,2.07671 -4.61133,4.61133v12.77734c0,2.53462 2.07671,4.61133 4.61133,4.61133h12.77734c2.53462,0 4.61133,-2.07671 4.61133,-4.61133v-12.77734c0,-2.53462 -2.07671,-4.61133 -4.61133,-4.61133zM9.61133,7h12.77734c1.45338,0 2.61133,1.15795 2.61133,2.61133v12.77734c0,1.45338 -1.15795,2.61133 -2.61133,2.61133h-12.77734c-1.45338,0 -2.61133,-1.15795 -2.61133,-2.61133v-12.77734c0,-1.45338 1.15795,-2.61133 2.61133,-2.61133zM17,9v10c0,1.11667 -0.88333,2 -2,2c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2v-2c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4c2.19733,0 4,-1.80267 4,-4v-6.11133c0.82783,0.64109 1.80928,1.09544 2.92773,1.11133l0.0293,-2c-1.64627,-0.02339 -2.95703,-1.34577 -2.95703,-3z"></path></g></g>
          </svg></a>
      </div>
   </div>
  `;
};

// Navbar admin
const createNavbarAdmin = () => {
  navBar.innerHTML = `
  <!-- links -->
      <!-- navbar responsive -->
       <div id="burger-menu" class="p-2 mx-2 md:p-0 hover:bg-[#F2E6D8] rounded-lg ">
         <a  class="navbar-burger self-center md:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
        </a>
       </div> 

        <!--navbar Desktop  -->
         <div>
           <ul class="hidden md:flex flex-row gap-4 text-xs font-semibold">
             <li class="hover:text-orange-500"><a href="/comprar">COMPRAR</a></li>
             <li class="hover:text-orange-500"><a href="/eventos">EVENTOS</a></li>
             <li class="hover:text-orange-500"><a href="">SOBRE NOSOTROS</a></li>
             <li class="hover:text-orange-500"><a href="">CONTACTO</a></li>
           </ul>
         </div>

       <!-- Logo -->
       <div class=" flex items-stretch ml-8 md:ml-0 md:mr-4 justify-center md:justify-start text-center">
       <a class="flex justify-center md:justify-start" href="/">
       <img class="w-1/6 md:w-1/4 flex justify-center" src="/images/Logo.png" alt="LOGO">
       </a>  
       </div>  

       <!-- Iconos -->
 <div class="flex flex-row justify-end text-right px-4 md:px-0 gap-4">
   <button id="user-menu" class="flex items-center hover:text-orange-500">
       <!-- Inicio sesion -->
       <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
       </svg>
   </button>
   <!-- Carrito -->
   <a class="flex items-center hover:text-orange-500" href="/carrito">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
       </svg>
       <span class="flex absolute -mt-5 ml-4">
           <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
             <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
             </span>
           </span>
   </div>

   <!-- User menu -->
    <div id="user-menuopen" class="hidden bg-[#E7782D] mr-12 lg:mr-60 z-10 fixed h-28 top-24 md:top-28 right-0 bottom-96">
   <div class="flex justify-center mt-4">
     <ul class="flex flex-col justify-center text-left gap-6 text-sm text-orange-50 font-semibold">
       <li class=""><a href="/productos">Dashboard</a></li>
       <li id="log-out" class="">Cerrar sesion</li>
     </ul>
   </div>
   </div>

   <!-- Menu responsive -->
     <div id="menu-responsive" class="hidden md:hidden bg-[#E7782D] z-10 fixed top-24 right-24 left-0 bottom-0">
   <div class="flex justify-center mt-16">
     <ul class="flex flex-col justify-center text-left gap-6 text-xl text-orange-50 font-semibold">
       <li class=""><a href="/comprar">COMPRAR</a></li>
       <li class=""><a href="/eventos">EVENTOS</a></li>
       <li class=""><a href="">SOBRE NOSOTROS</a></li>
       <li class=""><a href="">CONTACTO</a></li>
     </ul>
   </div>
   <div class="flex flex-row justify-center py-16 gap-4">
     <div cl>
       <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
       <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g>
       </svg></a>
     </div>
     <div>
       <a href=""><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
         <g fill="#fcf4ea" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M9.61133,5c-2.53462,0 -4.61133,2.07671 -4.61133,4.61133v12.77734c0,2.53462 2.07671,4.61133 4.61133,4.61133h12.77734c2.53462,0 4.61133,-2.07671 4.61133,-4.61133v-12.77734c0,-2.53462 -2.07671,-4.61133 -4.61133,-4.61133zM9.61133,7h12.77734c1.45338,0 2.61133,1.15795 2.61133,2.61133v12.77734c0,1.45338 -1.15795,2.61133 -2.61133,2.61133h-12.77734c-1.45338,0 -2.61133,-1.15795 -2.61133,-2.61133v-12.77734c0,-1.45338 1.15795,-2.61133 2.61133,-2.61133zM17,9v10c0,1.11667 -0.88333,2 -2,2c-1.11667,0 -2,-0.88333 -2,-2c0,-1.11667 0.88333,-2 2,-2v-2c-2.19733,0 -4,1.80267 -4,4c0,2.19733 1.80267,4 4,4c2.19733,0 4,-1.80267 4,-4v-6.11133c0.82783,0.64109 1.80928,1.09544 2.92773,1.11133l0.0293,-2c-1.64627,-0.02339 -2.95703,-1.34577 -2.95703,-3z"></path></g></g>
         </svg></a>
     </div>
  </div>
 `;
};


if (!userExist) {
createNavbarClient();
} else if(userExist){
  if (userExist.rol === "admin"){
  createNavbarAdmin();
} else if (userExist.rol === "client") {
createNavbarUser();
}

 

};

//User menu
const userBtn = document.querySelector('#user-menu');
userBtn.addEventListener('click', e =>{
  const userMenuOpen = document.querySelector('#user-menuopen');
  userMenuOpen.classList.toggle('hidden');
});

//Responsive
const navBtn = document.querySelector('#burger-menu');
navBtn.addEventListener('click', e =>{
  console.log(navBtn);
    const menu = navBtn.children[0].children[0]; 
    const menuOpen = document.querySelector('#menu-responsive');
    console.log(menuOpen);
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
       menu.innerHTML = `
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18 18 6M6 6l12 12" />
    `;
    menuOpen.classList.remove('hidden');
    } else {
        navBtn.classList.remove('active');
        menu.innerHTML = ` 
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
        `;
        menuOpen.classList.add('hidden');
    }
    
});

//Cerrar sesion
const logout = document.querySelector('#log-out')
logout.addEventListener('click', async e => {
  e.preventDefault();
    try {
        await axios.get('/api/logout');
        localStorage.clear();
        window.location.pathname = '/'

    } catch (error) {
        console.log(error.message);
    }

});
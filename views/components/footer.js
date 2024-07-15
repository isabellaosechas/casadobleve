const footer = document.querySelector('#footer');

const createFooter = () => {
    footer.innerHTML=`
    <div class="flex flex-col justify-center align-middle md:flex-row gap-8 py-12">
  <div class="mr-0 md:mr-32">
    <img src="/images/logofooter.png" alt="" srcset="">
  </div>
  <div class="flex justify-center text-center align-middle md:text-left">
    <ul>
      <li><a href="">Inicio</a></li>
      <li><a href="">Comprar</a></li>
      <li><a href="">Eventos</a></li>
      <li><a href="">Sobre nosotros</a></li>
      <li><a href="">Contacto</a></li>
    </ul>
  </div>
  <div class="flex justify-center text-center align-middle md:text-left">
    <ul>
      <li><a href="">Ceramic Bar</a></li>
      <li><a href="">Homekits</a></li>
      <li><a href="">Personalizados</a></li>
      <li><a href="">Reservas</a></li>
      <li><a href="">Politicas de Privacidad</a></li>
    </ul>
  </div>
  <div class="flex justify-center text-center align-middle md:text-left">
    <ul>
      <li>Links:</a></li>
      <li class="underline"><a href="">Instagram</a></li>
      <li class="underline "><a href="">Tiktok</a></li>
    </ul>
  </div>
 </div>
    `;
};

createFooter();
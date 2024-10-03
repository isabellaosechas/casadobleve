const contactSection = document.querySelector('#contact-section');

const createContactSection = () => {
    contactSection.innerHTML=`
    <div class="flex flex-col py-12">
    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif text-gray-900">
    ¿Tienes una <span class="text-orange-500">idea</span> o una <span class="text-[#E8AD3E]">pregunta</span>?
</h1>
<h3 class="mb-8 leading-relaxed">
  ¡Queremos escuharte!
</h3>
<button class=" text-black outline outline-1 outline-black hover:text-white hover:outline-white py-2 font-semibold text-sm"><a href="/contacto">CONTACTAR AHORA</a></button>
  </div>
    `;
}

createContactSection();
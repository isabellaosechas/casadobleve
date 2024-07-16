const productList = document.querySelector('#products')
let products = []

const renderProducts = (products) => {
    productList.innerHTML = '';
    products.forEach(product =>  {
      // Crear elemento
      const lista = document.createElement('li');
      lista.id = product._id;
      lista.innerHTML = `
      <div id="producto-individual" class="bg-white h-90 outline cursor-pointer outline-black outline-1">
                <img src="/uploads/${product.image}" class="w-96 h-64 sm:h-96 lg:h-[28rem]"/>
                <div class="px-4 py-3 flex flex-row justify-between items-center">
                    <p class="text-lg font-bold text-black truncate block capitalize">${product.name}</p>
                    <div class="flex items-center">
                        <p class="text-lg font-semibold text-black cursor-auto my-3">${product.price}</p>
                    </div>
                </div>
            </div>
      `;
      productList.append(lista);
    });

}

(async () => {
    const { data } = await axios.get('/api/products/');
    products = data;
    renderProducts(products);
  })();

//Get single page

productList.addEventListener('click', async e => {
    const productoIndividual = e.target.closest('#producto-individual')
    const id = productoIndividual.parentElement.id;
    window.location.pathname = `/${id}`;
})

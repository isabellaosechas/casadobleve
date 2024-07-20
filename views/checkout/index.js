import { createNotification } from "/components/notification.js";
const totalPagar = document.querySelector('#total-pagar');
const pagoForm = document.querySelector('#pago-form');
const fechaPago = document.querySelector('#fecha');
const notification = document.querySelector('#notification');
const pageUrl = window.location.href;
const pageUrlArray = pageUrl.split('/');
const id = pageUrlArray[4]
const tasaDolar = 36.57;
const fecha = new Date;
  const hoy = fecha.toLocaleDateString();
let data = [];
let order = [];

//Tasa del dolar
// const getDollar =async ()  => {
//     try {
//         const response = await fetch("https://ve.dolarapi.com/v1/dolares/oficial");
//         if (response){
//           data = await response.json()
//           console.log(data);
//         }
//       } catch (error) {
//         console.error(error.message)
//       };
//      };


const mostrarTotalPagar = () => {
    const total = order.total * tasaDolar;
totalPagar.innerHTML = `
<h2 class="text-lg font-medium mb-4">Total a pagar</h2>
                        <p>Total: ${order.total}$</p>
                        <p>Tasa: ${tasaDolar}</p>
                        <h2 class="text-lg font-medium mb-4">Total a pagar: Bs ${total}</h2>
`
};

const mostrarFechaPago = () => {
    fechaPago.innerHTML = `
    <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Fecha de pago</label>
     <p>${hoy}</p>`
};
mostrarFechaPago();

(async () => {
    const { data } = await axios.get(`/api/orders/${id}`);
    order = data;
    mostrarTotalPagar()
  })();
  
pagoForm.addEventListener('submit', async e => {
    e.preventDefault();
    const { data } = await axios.patch(`/api/orders/${id}`, {pago: true});
    localStorage.removeItem('carrito');
    createNotification(false, data);
    setTimeout(() => {
        notification.innerHTML = '';
    }, 5000);
    window.location.href = `/`;

});
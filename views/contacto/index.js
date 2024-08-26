const nameInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const submitBtn = document.querySelector('#boton-enviar');
const asuntoInput = document.querySelector('#asunto');
const mensajeInput = document.querySelector('#mensaje')

const NAME_VALIDATION = /^[a-zA-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1]+(\s*[a-zA-Z\u00d1][a-zA-Z-ÿí\u00f1\u00d1\s]*)$/;
const EMAIL_VALIDATION = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

//Validaciones 
let nameValidation = false;
let emailValidation = false;
let asuntoValidation = false;
let mensajeValidation = false;

const validation = (input, regexValidation) => {
    submitBtn.disabled = nameValidation && emailValidation && asuntoValidation && mensajeValidation ? false : true;

    if (input.value === '') {
        input.classList.remove('outline-red-500', 'outline-2', 'outline');
    } else if (regexValidation) {
        input.classList.remove('outline-red-500', 'outline-2', 'outline');
    } else if (!regexValidation) {
        input.classList.add('outline-red-500', 'outline-2', 'outline');
    }
}

//Eventos
nameInput.addEventListener('input', e => {
    nameValidation = NAME_VALIDATION.test(e.target.value);
    validation(nameInput, nameValidation);
    console.log(nameValidation); 
});
emailInput.addEventListener('input', e => {
    emailValidation = EMAIL_VALIDATION.test(e.target.value);
    validation(emailInput, emailValidation);
});
asuntoInput.addEventListener('input', e => {
    asuntoValidation = e.target.value !== '';
    validation(asuntoInput, asuntoValidation);
});
mensajeInput.addEventListener('input', e => {
    mensajeValidation = e.target.value !== '';
    validation(mensajeInput, mensajeValidation);
});

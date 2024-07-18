const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
         const user = {
        email: emailInput.value,
        password: passwordInput.value
    }
    const { data } = await axios.post('/api/login', user);
    localStorage.setItem('currentUser', JSON.stringify(data));
    window.location.pathname = `/productos`
    } catch (error) {
        console.log(error.response.data.error);
        errorText.innerHTML = error.response.data.error;
    }
   
})
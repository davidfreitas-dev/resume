/** 
 * Email JS Init
 */
window.onload = function() {
    emailjs.init('j5lfz4mIUUaOnUcfZ');
};

/** 
 * Menu Toggle
 */
const nav = document.querySelector('.nav')
const menuLink = document.querySelector('.nav__list')
const menuToggle = document.querySelector('.menu__toggle')

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()

    nav.classList.toggle('active')
    menuToggle.classList.toggle('active')

    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if (event.target.tagName === 'A') nav.classList.remove('active')

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

menuLink.addEventListener('click', toggleMenu)
menuToggle.addEventListener('click', toggleMenu)
menuToggle.addEventListener('touchstart', toggleMenu)

/** 
 * Contact Form
 */
const form = document.querySelector('#form-contact');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    if (!name || !email || !message) {
        showAlertMessage('Oops! Preencha todos os campos.', 'error');
        return;
    }
    
    const isValidEmail = validateEmail(email);

    if (!isValidEmail) {
        showAlertMessage('Informe um e-mail válido.', 'error');
        return;
    }

    sendEmail({
        name: name,
        email: email,
        message: message
    })
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlertMessage(msg, status) {
    const alert = document.getElementById('alert');
    alert.textContent = msg;
    alert.style.visibility = 'visible';
    alert.classList.toggle(status);

    setTimeout(() => {
        alert.style.visibility = 'hidden';
        alert.classList.toggle(status);
    }, 2000);
}
  
async function sendEmail(params) {
    const sendButton = document.getElementById('btn-send');

    sendButton.value = 'Enviando...';

    const templateParams = {
        name: params.name,
        email: params.email,
        message: params.message
    };

    await emailjs.send('service_m0ovszh', 'template_ltj7azl', templateParams)
        .then(function(response) {
            showAlertMessage(`${response.text}! Mensagem enviada com sucesso!`, 'success');
        }, function(error) {
            showAlertMessage(error, 'error');
        });
    
    sendButton.value = 'Enviar';
}
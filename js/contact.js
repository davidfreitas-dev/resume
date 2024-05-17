$(function() {
    emailjs.init('j5lfz4mIUUaOnUcfZ');

    const form = $('#form-contact');

    form.on('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);

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
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showAlertMessage(msg, status) {
        const alert = $('#alert');
        alert.text(msg);
        alert.css('visibility', 'visible');
        alert.toggleClass(status);

        setTimeout(function() {
            alert.css('visibility', 'hidden');
            alert.toggleClass(status);
        }, 2000);
    }

    async function sendEmail(params) {
        const sendButton = $('#btn-send');
        sendButton.val('Enviando...');

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

        sendButton.val('Enviar Mensagem');
    }
});

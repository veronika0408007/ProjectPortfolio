// Пример проверки формы перед отправкой
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var recaptcha = document.querySelector('.g-recaptcha-response').value;

    if (recaptcha === "") {
        alert("Пожалуйста, пройдите проверку reCAPTCHA.");
    } else {
        // Отправка формы
        this.submit();
    }
});

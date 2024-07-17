document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Запобігає стандартній поведінці форми

        function navigateHome() {
            alert('Відправлено');
            window.location.href = 'index.html'; // Переконайтесь, що шлях до файлу index.html правильний
        }

        // Показуємо повідомлення про успішне відправлення
        successMessage.style.display = 'block';

        // Очищаємо форму (опціонально)
        contactForm.reset();

    });
});
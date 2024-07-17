document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart button');
    const heartIcons = document.querySelectorAll('.heart-icon');
    const modal = document.getElementById('modal');
    const rentBtn = document.getElementById('rent-btn');
    const backBtn = document.getElementById('back-btn');
    const notification = document.getElementById('notification');
    const heartNotification = document.getElementById('heart-notification');
    let currentFigure;

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            currentFigure = event.currentTarget.closest('figure');
            modal.style.display = 'flex';
        });
    });

    rentBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        showNotification(notification);
    });

    backBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    heartIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            if (icon.name === 'heart-outline') {
                icon.name = 'heart';
                heartNotification.textContent = 'Додано до вподобаного';
            } else {
                icon.name = 'heart-outline';
                heartNotification.textContent = 'Видалено з доданого';
            }
            showNotification(heartNotification);
        });
    });

    function showNotification(element) {
        element.style.display = 'block';
        element.style.opacity = '1';
        setTimeout(function () {
            element.style.opacity = '0';
            setTimeout(function () {
                element.style.display = 'none';
            }, 500); // Match this duration with the transition duration
        }, 2000);
    }
});

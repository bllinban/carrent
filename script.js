document.querySelectorAll('.section').forEach((section) => {
    section.addEventListener('mouseenter', (event) => {
        document.querySelectorAll('.title').forEach((title) => {
            title.style.display = 'none';
        });
        section.querySelector('.title').style.display = 'block';

        document.querySelectorAll('.rent-button').forEach((button) => {
            button.style.display = 'none';
        });
        section.querySelector('.rent-button').style.display = 'block';
    });

    section.addEventListener('mouseleave', (event) => {
        section.querySelector('.title').style.display = 'none';
        section.querySelector('.rent-button').style.display = 'none';
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbyqXUOhhmKzTUVrIOhlvDmFuv5ls52ZdSIoWUaqIEv3167bS9pm1zBqprtjHN4ukDCR/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const galaxyContainer = document.getElementById('galaxy-container');
    const numberOfStars = 300;
    const colors = ['#ffffff', '#ffe9c4', '#d4fbff'];

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 3 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = color;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        galaxyContainer.appendChild(star);
    }
});

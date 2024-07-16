document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "We are a data intelligence hub",
        "driven by a team of seasoned",
        "data scientists and information",
        "designers."
    ];

    let currentText = 0;
    let currentChar = 0;
    const speed = 50; // Typing speed in milliseconds
    const pauseBetweenLines = 200; // Pause between lines in milliseconds

    function typeText() {
        if (currentChar < texts[currentText].length) {
            document.getElementById(`line${currentText + 1}`).textContent += texts[currentText].charAt(currentChar);
            currentChar++;
            setTimeout(typeText, speed);
        } else {
            currentChar = 0;
            currentText++;
            if (currentText < texts.length) {
                setTimeout(typeText, pauseBetweenLines);
            }
        }
    }

    // Clear initial text content
    texts.forEach((text, index) => {
        document.getElementById(`line${index + 1}`).textContent = "";
    });

    typeText();

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Starfield animation
    const canvas = document.getElementById('starfield');
    const context = canvas.getContext('2d');
    let width, height, stars = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function createStars() {
        stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * width,
            });
        }
    }

    function drawStars() {
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'white';
        for (let star of stars) {
            let x = (star.x - width / 2) * (width / star.z) + width / 2;
            let y = (star.y - height / 2) * (width / star.z) + height / 2;
            let size = width / star.z;
            context.beginPath();
            context.arc(x, y, size, 0, 2 * Math.PI);
            context.fill();
        }
    }

    function updateStars() {
        for (let star of stars) {
            star.z -= 0.2;
            if (star.z <= 0) {
                star.z = width;
            }
        }
    }

    function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener('resize', resizeCanvas);
});

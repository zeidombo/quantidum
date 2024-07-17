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
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    const navItems = document.querySelectorAll(".nav-links li");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navMenu.classList.remove("open");
        });
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
        for (let i = 0; i < 1000; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: Math.random() * 0.05
            });
        }
    }

    function drawStars() {
        context.clearRect(0, 0, width, height);
        context.fillStyle = 'rgba(255, 255, 255, 1)';
        for (let star of stars) {
            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
            context.closePath();
            context.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            context.fill();
        }
    }

    function updateStars() {
        for (let star of stars) {
            star.alpha += star.speed;
            if (star.alpha >= 1 || star.alpha <= 0) {
                star.speed = -star.speed;
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

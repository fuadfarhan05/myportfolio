// Shooting Stars
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = (1 + Math.random() * 2) + 's';
    document.getElementById('background').appendChild(star);
    setTimeout(() => star.remove(), 2000);
}

setInterval(createShootingStar, 500);

// Floating PNG Images
const images = [
    'kodely.png',
    'google.png',
    'infosys.png'
];

function floatImages() {
    const container = document.getElementById('floating-images');
    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.top = Math.random() * window.innerHeight + 'px';
        img.style.left = Math.random() * window.innerWidth + 'px';
        container.appendChild(img);

        // Animate movement
        setInterval(() => {
            img.style.top = Math.random() * window.innerHeight + 'px';
            img.style.left = Math.random() * window.innerWidth + 'px';
        }, 5000 + Math.random() * 5000);
    });
}

floatImages();

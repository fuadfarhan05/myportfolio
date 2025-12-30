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

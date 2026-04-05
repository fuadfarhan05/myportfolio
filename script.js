// === Static Twinkling Stars ===
function createStars(count = 120) {
    const bg = document.getElementById('background');
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', (2.5 + Math.random() * 4) + 's');
        star.style.setProperty('--delay', (Math.random() * 5) + 's');
        // Vary star size slightly
        const size = Math.random() < 0.15 ? '3px' : '2px';
        star.style.width = size;
        star.style.height = size;
        bg.appendChild(star);
    }
}

// === Shooting Stars ===
function createShootingStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDuration = (1.2 + Math.random() * 2) + 's';
    document.getElementById('background').appendChild(star);
    setTimeout(() => star.remove(), 3500);
}

// === Scroll Fade-In ===
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger sibling items slightly
                const siblings = entry.target.parentElement
                    ? [...entry.target.parentElement.children].filter(el => el.classList.contains('fade-in'))
                    : [];
                const index = siblings.indexOf(entry.target);
                const delay = Math.min(index * 60, 300);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// === Theme Toggle ===
function updateToggleIcon(theme) {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    if (theme === 'light') {
        btn.textContent = '☾';
        btn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        btn.textContent = '☀';
        btn.setAttribute('aria-label', 'Switch to light theme');
    }
}

function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateToggleIcon(saved);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateToggleIcon(next);
}

// === Init ===
initTheme();
createStars();
setInterval(createShootingStar, 600);
initScrollAnimations();

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

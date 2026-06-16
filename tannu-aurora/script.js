/* ==============================================
   TANNU AURORA — Northern Lights Website
   Interactive Script — Stars, Aurora, Particles
   ============================================== */

// ---- PRELOADER ----
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 2200);
});

// ---- CURSOR GLOW ----
const cursorGlow = document.getElementById('cursor-glow');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.left = mouseX + 'px';
    cursorGlow.style.top = mouseY + 'px';
});

// ---- STAR CANVAS ----
const starCanvas = document.getElementById('star-canvas');
const starCtx = starCanvas.getContext('2d');
let stars = [];

function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
}

function createStars() {
    stars = [];
    const count = Math.floor((starCanvas.width * starCanvas.height) / 4000);
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            radius: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.7 + 0.3,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinklePhase: Math.random() * Math.PI * 2,
        });
    }
}

function drawStars(time) {
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    for (const star of stars) {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;
        starCtx.beginPath();
        starCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        starCtx.fillStyle = `rgba(220, 220, 255, ${alpha})`;
        starCtx.fill();

        // Add subtle glow to larger stars
        if (star.radius > 1) {
            starCtx.beginPath();
            starCtx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
            starCtx.fillStyle = `rgba(200, 210, 255, ${alpha * 0.08})`;
            starCtx.fill();
        }
    }
}

resizeStarCanvas();
createStars();

// ---- AURORA CANVAS ----
const auroraCanvas = document.getElementById('aurora-canvas');
const auroraCtx = auroraCanvas.getContext('2d');

function resizeAuroraCanvas() {
    auroraCanvas.width = window.innerWidth;
    auroraCanvas.height = window.innerHeight;
}

resizeAuroraCanvas();

// Aurora wave parameters
const auroraWaves = [
    { color1: 'rgba(0, 255, 135, ', color2: 'rgba(0, 212, 255, ', yBase: 0.25, amplitude: 40, frequency: 0.003, speed: 0.0008, width: 200 },
    { color1: 'rgba(121, 40, 202, ', color2: 'rgba(168, 85, 247, ', yBase: 0.30, amplitude: 50, frequency: 0.002, speed: 0.0006, width: 250 },
    { color1: 'rgba(0, 212, 255, ', color2: 'rgba(0, 255, 135, ', yBase: 0.20, amplitude: 30, frequency: 0.004, speed: 0.001, width: 180 },
    { color1: 'rgba(255, 113, 206, ', color2: 'rgba(121, 40, 202, ', yBase: 0.35, amplitude: 35, frequency: 0.0025, speed: 0.0007, width: 220 },
];

function drawAurora(time) {
    auroraCtx.clearRect(0, 0, auroraCanvas.width, auroraCanvas.height);

    for (const wave of auroraWaves) {
        const baseY = auroraCanvas.height * wave.yBase;

        for (let x = 0; x < auroraCanvas.width; x += 2) {
            const y = baseY + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude
                + Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 1.3) * wave.amplitude * 0.5;

            const intensity = (Math.sin(x * 0.005 + time * 0.0003) * 0.3 + 0.7);
            const alpha = 0.04 * intensity;

            const gradient = auroraCtx.createLinearGradient(x, y - wave.width / 2, x, y + wave.width / 2);
            gradient.addColorStop(0, wave.color1 + '0)');
            gradient.addColorStop(0.3, wave.color1 + alpha + ')');
            gradient.addColorStop(0.5, wave.color2 + (alpha * 0.8) + ')');
            gradient.addColorStop(0.7, wave.color1 + (alpha * 0.4) + ')');
            gradient.addColorStop(1, wave.color2 + '0)');

            auroraCtx.fillStyle = gradient;
            auroraCtx.fillRect(x, y - wave.width / 2, 2, wave.width);
        }
    }
}

// ---- PARTICLE CANVAS ----
const particleCanvas = document.getElementById('particle-canvas');
const particleCtx = particleCanvas.getContext('2d');
let particles = [];

function resizeParticleCanvas() {
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
}

resizeParticleCanvas();

function createParticles() {
    particles = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * particleCanvas.width,
            y: Math.random() * particleCanvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: -Math.random() * 0.5 - 0.1,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
            hue: Math.random() > 0.5 ? 170 : 280, // teal or purple
        });
    }
}

createParticles();

function drawParticles() {
    particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

    for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Reset particle if out of bounds
        if (p.y < -10) {
            p.y = particleCanvas.height + 10;
            p.x = Math.random() * particleCanvas.width;
        }
        if (p.x < -10) p.x = particleCanvas.width + 10;
        if (p.x > particleCanvas.width + 10) p.x = -10;

        particleCtx.beginPath();
        particleCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        particleCtx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        particleCtx.fill();
    }

    // Draw subtle lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                particleCtx.beginPath();
                particleCtx.moveTo(particles[i].x, particles[i].y);
                particleCtx.lineTo(particles[j].x, particles[j].y);
                particleCtx.strokeStyle = `rgba(0, 212, 255, ${0.03 * (1 - dist / 120)})`;
                particleCtx.lineWidth = 0.5;
                particleCtx.stroke();
            }
        }
    }
}

// ---- MAIN ANIMATION LOOP ----
function animate(time) {
    drawStars(time);
    drawAurora(time);
    drawParticles();
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// ---- RESIZE HANDLING ----
window.addEventListener('resize', () => {
    resizeStarCanvas();
    createStars();
    resizeAuroraCanvas();
    resizeParticleCanvas();
});

// ---- NAVBAR SCROLL ----
const nav = document.getElementById('main-nav');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 80) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Active nav link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) {
            link.classList.add('active');
        }
    });
});

// ---- MOBILE MENU ----
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('open');
    });
});

// ---- SCROLL ANIMATIONS ----
const animElements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
});

animElements.forEach(el => observer.observe(el));

// ---- PHOTO ENVELOPES ----
const envelopeStates = { 1: false, 2: false };

document.querySelectorAll('.photo-envelope').forEach(env => {
    env.addEventListener('click', () => {
        const id = env.dataset.envelope;
        const reveal = document.getElementById('reveal-' + id);
        envelopeStates[id] = !envelopeStates[id];

        if (envelopeStates[id]) {
            // Open envelope
            env.classList.add('opened');

            // Particle burst from envelope
            const rect = env.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            for (let i = 0; i < 20; i++) {
                createWishParticle(cx, cy);
            }

            // Reveal photo + letter after flap opens
            setTimeout(() => {
                reveal.classList.add('visible');
            }, 500);

            // Shooting star celebration
            setTimeout(() => createShootingStar(), 600);
            setTimeout(() => createShootingStar(), 900);
        } else {
            // Close
            reveal.classList.remove('visible');
            setTimeout(() => {
                env.classList.remove('opened');
            }, 300);
        }
    });
});

// ---- MAGIC WISH BUTTON ----
const magicBtn = document.getElementById('magic-btn');

magicBtn.addEventListener('click', (e) => {
    // Create shooting stars
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createShootingStar();
        }, i * 300);
    }

    // Create burst particles at button
    const rect = magicBtn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    for (let i = 0; i < 30; i++) {
        createWishParticle(cx, cy);
    }
});

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = Math.random() * window.innerWidth * 0.6 + 'px';
    star.style.top = Math.random() * window.innerHeight * 0.4 + 'px';

    const hue = Math.random() > 0.5 ? '170' : '280';
    star.style.background = `linear-gradient(90deg, hsla(${hue}, 100%, 70%, 0.9), transparent)`;
    star.style.boxShadow = `0 0 8px hsla(${hue}, 100%, 70%, 0.5)`;

    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1200);
}

function createWishParticle(cx, cy) {
    const p = document.createElement('div');
    p.className = 'wish-particle';

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    const colors = ['#00ff87', '#00d4ff', '#7928ca', '#ff71ce', '#a855f7'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    p.style.background = color;
    p.style.boxShadow = `0 0 8px ${color}`;
    p.style.setProperty('--tx', tx + 'px');
    p.style.setProperty('--ty', ty + 'px');

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1500);
}

// ---- SMOOTH SCROLL FOR NAV LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---- PARALLAX ON FLOATING ELEMENTS ----
document.addEventListener('mousemove', (e) => {
    const floatElements = document.querySelectorAll('.float-element');
    const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
    const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;

    floatElements.forEach((el, i) => {
        const speed = (i + 1) * 5;
        el.style.transform = `translate(${xPercent * speed}px, ${yPercent * speed}px)`;
    });
});

// ---- MUSIC TOGGLE (Visual Only) ----
const musicToggle = document.getElementById('music-toggle');
let musicPlaying = true;

musicToggle.addEventListener('click', () => {
    musicPlaying = !musicPlaying;
    if (musicPlaying) {
        musicToggle.classList.remove('paused');
    } else {
        musicToggle.classList.add('paused');
    }
});

// ---- PERIODIC SHOOTING STARS ----
setInterval(() => {
    if (Math.random() > 0.6) {
        createShootingStar();
    }
}, 4000);

// ---- TEXT REVEAL ON HERO (Typewriter effect for subtitle) ----
// Already handled by CSS animations, but adding a subtle touch
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.style.opacity = '0';
    setTimeout(() => {
        heroSubtitle.style.opacity = '1';
        heroSubtitle.style.transition = 'opacity 1.5s ease';
    }, 1800);
}

// ---- CONSOLE EASTER EGG ----
console.log(
    '%c✨ Made with love for Tannu — the girl who outshines the aurora ✨',
    'color: #00d4ff; font-size: 14px; font-family: cursive; text-shadow: 0 0 10px #7928ca;'
);

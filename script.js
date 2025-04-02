// Cursor personalizado
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
    cursor.style.transform = 'scale(0.8)';
    setTimeout(() => {
        cursor.style.transform = 'scale(1)';
    }, 100);
});

// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        nav.style.display = 'flex';
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.style.display = 'none';
        menuOpen = false;
    }
});

// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Fecha o menu mobile se estiver aberto
            if (menuOpen) {
                menuBtn.click();
            }
        }
    });
});

// Animação de entrada para cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.feature-card, .about-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Partículas de fundo
function createParticle() {
    const particles = document.querySelector('.particles');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    particles.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

setInterval(createParticle, 200);

// Efeito hover nos botões
document.querySelectorAll('.cta-button, .download-button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Animação do logo
const logoShine = document.querySelector('.logo-shine');
setInterval(() => {
    logoShine.style.left = '-100%';
    setTimeout(() => {
        logoShine.style.left = '100%';
    }, 100);
}, 3000);

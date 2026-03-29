const navigation = document.querySelector('.navigation');
const navContainer = document.querySelector('.nav-container');
const navHero = document.querySelector('.nav-hero');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    const scrollPosition = window. scrollY;

    const root = document.documentElement;
    const heroHeight = getComputedStyle(root).getPropertyValue('--navigation-height').trim();
    const heroHeightPx = parseInt(heroHeight);

    if (scrollPosition >= window.innerHeight - heroHeightPx) {
        navigation.classList.add('scrolled');
        navContainer.classList.add('scrolled');
        navHero.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        navigation.classList.remove('scrolled');
        navContainer.classList.remove('scrolled');
        navHero.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
    }
});
document.getElementById('word').textContent = '';
const words = ["Java", "JavaEE", "Spring", "Kafka", "Docker", "AWS", "FastAPI", "Angular", "TypeScript", "PostgreSQL", "Redis", "Terraform"];

const typed = new Typed('#word', {
    strings: words,
    typeSpeed: 130,
    backSpeed: 70,
    showCursor: true,
    startDelay: 0,
    cursorChar: "|",
    loop: true,
    contentType: 'html'
});

const glassBox = document.querySelector('.glass-box');
let isPaused = false;

glassBox.addEventListener('mouseenter', () => {
    isPaused = true;
    typed.stop();
    glassBox.style.borderColor = '#66FCF1';
    glassBox.style.transform = 'scale(1.02)';
    glassBox.style.boxShadow = '0 8px 40px rgba(102, 252, 241, 0.3)';
});

glassBox.addEventListener('mouseleave', () => {
    isPaused = false;
    typed.start();
    glassBox.style.borderColor = 'rgba(5, 14, 60, 0.38)';
    glassBox.style.transform = 'scale(1)';
    glassBox.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
});
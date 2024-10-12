const sections = document.querySelectorAll('section');

// Parallax scrolling effect for the background
const parallaxEffect = () => {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPositionY = `${scrollPosition * -0.1}px`; // Adjust for parallax
};

// Zoom-in effect for sections
const scrollEffect = () => {
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', () => {
    parallaxEffect();
    scrollEffect();
});

// Sticky header with shadow
const header = document.querySelector('header');
const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - header.offsetHeight,
            behavior: 'smooth'
        });
    });
});




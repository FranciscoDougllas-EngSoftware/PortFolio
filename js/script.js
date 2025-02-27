// Mudança de tema
const themeButton = document.querySelector('.muda-tema');
const body = document.body;

themeButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
});

// Animação de fade-in nas seções
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Animação de digitação no título do Home
const homeTitle = document.querySelector('#home h2');
const text = homeTitle.textContent;
homeTitle.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        homeTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener('load', () => {
    typeWriter();
});
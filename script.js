// Evidenzia nel menu il link della sezione attualmente visibile
// mentre l'utente scorre la pagina (scroll spy).

const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const setActiveLink = () => {
    let currentId = 'home';

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top <= 120) {
            currentId = section.id;
        }
    });

    links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
    });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
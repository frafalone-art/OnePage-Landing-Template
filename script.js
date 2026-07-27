// ============ LANGUAGE SWITCH ============
// Reads/saves the preference in localStorage. To add another
// language, just add another <button data-set-lang="xx"> in
// the header and the matching lang-xx classes in the HTML/CSS.

const langButtons = document.querySelectorAll('.lang-switch button');
const htmlEl = document.documentElement;

const setLanguage = (lang) => {
    htmlEl.setAttribute('data-lang', lang);
    htmlEl.setAttribute('lang', lang);
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.setLang === lang);
    });
    try {
        localStorage.setItem('preferred-lang', lang);
    } catch (e) {
        // localStorage not available (e.g. private browsing): doesn't break the site
    }
};

langButtons.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.setLang));
});

// Apply the saved language on load, if present
try {
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        setLanguage(savedLang);
    }
} catch (e) {
    // ignore if localStorage isn't available
}

// Highlight the menu link for the section currently in view
// while the user scrolls the page (scroll spy).

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

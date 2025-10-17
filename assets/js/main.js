document.body.classList.add('js-enabled');

const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.main-nav');
const currentYearElement = document.getElementById('current-year');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            navMenu.classList.remove('open');
        });
    });
}

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const hero = document.querySelector('.hero');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                hero?.classList.add('in-view');
            }
        });
    },
    { threshold: 0.2 }
);

if (hero) {
    observer.observe(hero);
}

const sections = document.querySelectorAll('.section');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.25, rootMargin: '0px 0px -80px 0px' }
);

sections.forEach((section) => revealObserver.observe(section));

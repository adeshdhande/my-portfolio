// ===== MOBILE MENU TOGGLE =====
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
    });
}

// Close menu when clicking on nav links
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
});

// ===== SCROLL SECTIONS ACTIVE LINK =====
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 60;
        const sectionId = current.getAttribute("id");
        const navItem = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add("active-link");
            } else {
                navItem.classList.remove("active-link");
            }
        }
    });
}

window.addEventListener("scroll", scrollActive);

// ===== SCROLL REVEAL ANIMATION =====
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2000,
    delay: 200,
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text");
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
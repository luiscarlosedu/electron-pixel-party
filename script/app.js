// Menu Responsivo
class MobileNavBar {
    constructor(mobileMenu, navBar, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navBar);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    animateLinks() {
        if (this.navList.classList.contains(this.activeClass)) {
            this.navLinks.forEach((link, index) => {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            });
        } else {
            this.navLinks.forEach(link => {
                link.style.animation = "";
            });
        }
    }

    handleMenuToggle() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    handleLinkClick() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }

    addEventListeners() {
        this.mobileMenu.addEventListener("click", this.handleMenuToggle);
        this.navLinks.forEach(link => {
            link.addEventListener("click", this.handleLinkClick);
        });
    }

    init() {
        if (this.mobileMenu) {
            this.addEventListeners();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    ".mobile-menu",
    ".nav-bar",
    ".nav-bar a"
);
mobileNavbar.init();

let header = document.querySelector('.header');

function handleScroll() {
    var scrollPosition = window.scrollY;
    var widthPosition = window.innerWidth;

    if(scrollPosition > 0 && widthPosition < 768) {
        header.style.background = 'rgba(0, 0, 0, 0.3)'
    } else {
        header.style.background = 'transparent'
    }
}
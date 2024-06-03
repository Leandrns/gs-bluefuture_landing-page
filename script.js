// MENU DROPDOWN
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const menuDropDown = document.querySelector('.menu_dropdown')

toggleBtn.onclick = function () {
    menuDropDown.classList.toggle('open')

    const isOpen = menuDropDown.classList.contains('open')
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

// CARROSSEL DE IMAGENS
let currentIndex = 0;
const items = document.querySelectorAll('.carrosel-item');
const totalItems = items.length;
const textos = [
    "Texto A",
    "Texto B",
    "Texto C"
];

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.opacity = i === index ? '1' : '0';
        document.querySelector('.texto_2 p').textContent = textos[index];
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
});

showSlide(currentIndex);

//Transição dos links do footer e do menu para as sections
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.item_section');
    const footerLinks = document.querySelectorAll('.footer-link');

    const scrollToSection = function(event, targetId) {
        event.preventDefault();
        const targetSection = document.querySelector(targetId);
        if(targetSection) {
            setTimeout(function() {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    };

    menuLinks.forEach(function(item) {
        item.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            scrollToSection(event, targetId);
        });
    });

    footerLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            scrollToSection(event, targetId);
        });
    });
});
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

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.opacity = i === index ? '1' : '0';
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

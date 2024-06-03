//Seção 5

function aparecerTexto1() {
    document.getElementById("divum").innerHTML = "Socializar com pesoas que estão interessadas no assunto, ou seja, buscando melhorar o mundo e o mar!";
}
function aparecerTexto2() {
    document.getElementById("divdois").innerHTML = "Ver quantas pessoas estão ajudando o mar, sentindo assim uma gratificação por ver que ainda há esperança.";
}
function aparecerTexto3() {
    document.getElementById("divtres").innerHTML = "Ter a informação de quem são as empresas que você pode contar e chamar para ajudar!";
}    
function aparecerTexto4() {
    document.getElementById("divquatro").innerHTML = "Uma ampla gama de acesso a dados referentes a poluição marinha vinda de nossa Boia. ";
}    
function aparecerTexto5() {
    document.getElementById("divcinco").innerHTML = "A união faz a força, se junte a uma de nossas comunidades e faça parte da solução você também!";
}    
function aparecerTexto6() {
    document.getElementById("divseis").innerHTML = "Oque a as pessoas que usam redes sociais e empresas querem? É visibilidade, e caso ajude o oceano é isso que terá.";
}

function reset1() {
    document.getElementById("divum").innerHTML = '<img src="images/socializar.png" alt="Socializando com pessoas sobre o mesmo assunto">';
}
function reset2() {
    document.getElementById("divdois").innerHTML = '<img src="images/limpando_praia.png" alt="Criança ajudando na limpeza da praia">';
}
function reset3() {
    document.getElementById("divtres").innerHTML = '<img src="images/cleanup.png" alt="Empresa que trabalha em ajudar o mar">';
}
function reset4() {
    document.getElementById("divquatro").innerHTML = '<img src="images/dados.png" alt="Dados vindos da Boia SeaConnect">';
}
function reset5() {
    document.getElementById("divcinco").innerHTML = '<img src="images/comunidade.png" alt="Se unir a outras pessoas da plataforma">';
}
function reset6() {
    document.getElementById("divseis").innerHTML = '<img src="images/visibilidade.png" alt="Ganhe visibilidade através do sistema de ranking">';
}






















































//Seção 5

function aparecerTexto() {
    document.getElementById("divum").innerHTML = "Socializar com pesoas que estão interessadas no assunto, ou seja, buscando melhorar o mundo e o mar!";
    document.getElementById("divdois").innerHTML = "Ver quantas pessoas estão ajudando o mar, sentindo assim uma gratificação por ver que ainda há esperança.";
    document.getElementById("divtres").innerHTML = "Ter a informação de quem são as empresas que você pode contar e chamar para ajudar!";
    document.getElementById("divquatro").innerHTML = "Uma ampla gama de acesso a dados referentes a poluição marinha vinda de nossa Boia. ";
    document.getElementById("divcinco").innerHTML = "A união faz a força, se junte a uma de nossas comunidades e faça parte da solução você também!";
    document.getElementById("divseis").innerHTML = "Oque a as pessoas que usam redes sociais e empresas querem? É visibilidade, e caso ajude o oceano é isso que terá.";
  }
  function reset() {
    document.getElementById("divum").innerHTML = '<img src="images/socializar.png" alt="Socializando com pessoas sobre o mesmo assunto">';
    document.getElementById("divdois").innerHTML = '<img src="images/limpando_praia.png" alt="Criança ajudando na limpeza da praia">';
    document.getElementById("divtres").innerHTML = '<img src="images/cleanup.png" alt="Empresa que trabalha em ajudar o mar">';
    document.getElementById("divquatro").innerHTML = '<img src="images/dados.png" alt="Dados vindos da Boia SeaConnect">';
    document.getElementById("divcinco").innerHTML = '<img src="images/comunidade.png" alt="Se unir a outras pessoas da plataforma">';
    document.getElementById("divseis").innerHTML = '<img src="images/visibilidade.png" alt="Ganhe visibilidade através do sistema de ranking">';
  }
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
  
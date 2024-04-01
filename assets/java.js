const btndark = document.getElementById('darkmode');
const btnlight = document.getElementById('lightmode');
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const sections = document.querySelectorAll('.sections');
const proyects = document.querySelectorAll('.proyect');
const btnopen = document.getElementById('openinfo')
const btnclose = document.getElementById('closeinfo')
const containerinfos = document.getElementById('containerinfo')

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

btnopen.addEventListener("click", () => {
    containerinfos.style.display = 'block';
    containerinfos.style.animationName = 'fadeIn';
    btnopen.style.display = 'none';
    btnclose.style.display = 'flex';
});

btnclose.addEventListener('click', function () {
    containerinfos.style.animationName = 'fadeOut';
    setTimeout(() => {

        containerinfos.style.display = 'none';
    }, 250)
    btnopen.style.display = 'flex';
    btnclose.style.display = 'none';
});

btndark.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
});

btnlight.addEventListener('click', function () {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    sections.forEach(section => {
        section.style.backgroundColor = 'rgb(109 102 102 / 11.5%)';
    });
    proyects.forEach(proyect => {
        proyect.style.backgroundColor = 'rgb(109 102 102 / 11.5%)';
    });
});
const btndark = document.getElementById('darkmode')
const btnlight = document.getElementById('lightmode')

const sections1 = document.getElementById('section1')
const sections2 = document.getElementById('section2')
const sections3 = document.getElementById('section3')
const sections4 = document.getElementById('section4')

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


btndark.addEventListener('click', function(){

    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';


})

lightmode.addEventListener('click', function(){
    document.body.style.backgroundColor = '#fff'
    document.body.style.color = 'black';
    sections1.style.backgroundColor = 'white'
    sections1.style.backgroundColor = 'rgb(109 102 102 / 11%)'
    sections2.style.backgroundColor = 'rgb(109 102 102 / 11%)'
    sections3.style.backgroundColor = 'rgb(109 102 102 / 11%)'
    sections4.style.backgroundColor = 'rgb(109 102 102 / 11%)'
})
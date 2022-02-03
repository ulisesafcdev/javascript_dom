/* 

StopPropagation and prevenDefault

*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos (e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    // e.stopPropagation(); // con esto se detiene la propagacion de eventos
}

$divsEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos);
})

$linkEventos.addEventListener("click", (e) => {
    alert("Repositorio de ulisesafcdev");
    // cancelar la accion que tiene por defecto el elemento
    e.preventDefault();
    e.stopPropagation();
})
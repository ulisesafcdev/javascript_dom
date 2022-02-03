/* 

Flujo de eventos: Burbuja y Captura

burbuja: se propaga el evente desde el mas interna hasta el mas externo
captura: se propaga el evento desde el mas externo hasta el mas interno

*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
    console.log(`Hola... te saluda ${this.className}, y el click lo origin ${e.target.className}`);
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
    // flujo de evento tipo burbuja
    // los addEventListener recibien un tercer parametro que por defecto es false
    // este tercer parametro hace referencia a la propagacion de eventos
    // osea tipo de flujo burbuja
    // al cambiarlo a true es tipo de flujo de captura
    div.addEventListener("click", flujoEventos, {
        capture: false, // hace referencia a la propagacion del evento
        once: true // hace referencia a que el evento se hara una sola vez
    });
})
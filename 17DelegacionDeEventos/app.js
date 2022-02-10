/* 

delegacion de eventos
con esto evitamos directamente la propagacion de eventos

*/

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
const $linkEvento = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
    console.log(`Hola te saludo desde ${this.className} y el click lo origino ${e.target.className}`);
    // console.log(e);
    // e.stopPropagation();
}

/* ************************************************ */

// vamos a desencadenar eventos segun donde demos el click

document.addEventListener("click", (e) => {
    console.log("Diste click en" ,e.target);

    if (e.target.matches(".eventos-flujo div")) {

        flujoEventos(e);

    }

    if (e.target.matches(".eventos-flujo a")) {
        alert("Repositorio de ulisesafcdev: https://github.com/ulisesafcdev?tab=repositories");
        e.preventDefault();
    }
})

/* ************************************************ */

// $divsEventos.forEach((div) => {
//     div.addEventListener("click", flujoEventos);
// })

/* ************************************************ */

// $linkEvento.addEventListener("click", (e) => {
// })
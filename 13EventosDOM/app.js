// EVENTOS EN JAVASCRIPT
/* 

EVENTOS: PRIMERA FORMA (NO RECOMENDADA)

*/

/* 

Caracteristicas importantes
    type: Tipo de evento que se desencadeno Ej: "click"
    target: el objeto que origino el evento Ej: "button"

*/

function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

// ---------------------------
// manejador de evento semantico
// MANERA RECOMENDADA DE HACERLO PERO ...
const $eventoSemantico = document.getElementById("evento-semantico");

// los manejadores de eventos semanticos solo pueden ejecutar una funcion
// pueden recibir una funcion anonima, pero estas no pueden recibir parametros
// el unico parametro que reciben es el "event"
$eventoSemantico.onclick = holaMundo;

$eventoSemantico.onclick = function (e) {
    alert("Hola manejador de eventos semanticos");
    console.log(e);
    console.log(event);
}

/* ----------------------------------------------- */
// MANEJADOR DE EVENTOS MULTIPLE

const $eventoMultiple = document.getElementById("evento-multiple");

// recibe dos parametros, el type(el evento que lo origino) y el listener(funcion que va a ejecutar)
// la funcion debe ir sin parentesis, ya que los parentesis significan ejecucion inmediata

// estas pueden recibir multiples funciones
$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo manejador de evento multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
})
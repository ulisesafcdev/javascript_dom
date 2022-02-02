/* 

Eventos con parametros y Remover Eventos

*/

function saludar (nombre = "Desconocido") {

    alert(`Hola ${nombre}`);

}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", saludar);
/* 
    Esto nos devolvera [object PointerEvent]
    Esto quiere decir que al agregar una funcion manejadora de eventos, esta solo va recibir unicamente como parametro el EventHandler, recordemos que en la funcion saludar estamos mandando un parametro "nombre" y esa misma la hemos invocado como funcion manejadora del evento click en el boton eventoMultiple.

    para solucionar eso se hace lo siguiente:
    se manda un arrowFunction como funcion manejadora de evento, y dentro de esta se invoca la funcion saludar
*/

$eventoMultiple.addEventListener("click", () => saludar());
$eventoMultiple.addEventListener("click", () => {
    saludar("ulisesafcdev");
})

/* 

como remover eventos
Se debe guardar en una funcion el evento removeListener
Es la manera mas correcta de agregar y quitar eventos

*/
const $removerEvento = document.getElementById("evento-remover");

const removerEvento = (e) => {
    alert(`Removiendo evento ${e.type}`);
    console.log(e.type);
    $removerEvento.removeEventListener("dblclick", removerEvento);
    $removerEvento.disabled = true;

}

$removerEvento.addEventListener("dblclick", removerEvento);



 
/* 

recorriendo el dom

*/

// recorremos solamente elementos del html

const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); // mostramos los hijos del elemento

console.log($cards.children[3]); // nos devuelve el 3 elemento dentro de cards
console.log($cards.parentElement); // nos devuelve el elemento padre de donde se encuentra
console.log($cards.firstElementChild); // nos devuelve el primer elemento
console.log($cards.lastElementChild); // nos devuelve el ultimo elemento
console.log($cards.previousElementSibling); // nos devuelve el elemento que esta antes
console.log($cards.nextElementSibling); // nos devuelve el elemento que esta despues

// devuelve el elemento padre mas cercano
console.log($cards.children[3].closest("section"));
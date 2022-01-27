/* 

Nodos, Selectores y Elementos

*/

// ----------------------------------------------------
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
// ----------------------------------------------------
// Estos tres de aca arriba han sido reemplazados por
// document.querySelector
// ----------------------------------------------------
console.log(document.getElementById("menu")); // devuelve solo los id

console.log(document.querySelector("#menu")); // busca el selector id que le mandamos
console.log(document.querySelector(".card")); // busca el selector class que le mandamos
console.log(document.querySelector("a")); // devuelve el primer selector/elemento que encuentre
console.log(document.querySelectorAll("a")); // devuelve todos los selectores/elementos que encuentre

// devuelve la cantidad deselectores/elementos que encuentre
console.log(document.querySelectorAll("a").length); 
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); // devuelve el selector/elemento de la posicion 2
// devuelve todos los selector/elemento de #menu
console.log(document.querySelectorAll("#menu li"));
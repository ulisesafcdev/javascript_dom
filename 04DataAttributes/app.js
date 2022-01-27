/* 

Data Attributes y Attribute

*/

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

// --------------------------------------------------------

// diferencias de la notacion del punto

// devuelve la direccion completa de href
console.log(document.querySelector(".link-inicio").href);

// devuelve solo lo que esta escrito en href
console.log(document.querySelector(".link-inicio").getAttribute("href"));

// --------------------------------------------------------

// como cambiar el valor del attribute

document.documentElement.lang = "es";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

// --------------------------------------------------------

const $link_inicio = document.querySelector(".link-inicio");

$link_inicio.setAttribute("target", "_blank");
$link_inicio.setAttribute("rel", "noopener");
$link_inicio.setAttribute("href", "https://twitter.com/ulisesafcdev");

console.log($link_inicio.hasAttribute("rel")); // devuelve true
$link_inicio.removeAttribute("rel"); // eliminar atributo
console.log($link_inicio.hasAttribute("rel")); // devuelve false

// --------------------------------------------------------
// DataAttribute

console.log($link_inicio.getAttribute("data-description")); 
$link_inicio.setAttribute("data-year","2022"); // agregar attribute
console.log($link_inicio.dataset); // muestra un Map con los dataAttribute

// regresa el valor de los data que tenemos
console.log($link_inicio.dataset.description); // "data-description" 
console.log($link_inicio.dataset.year); // data-year
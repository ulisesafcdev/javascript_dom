/* 

creando elementos dinamicamente con javascript

*/

// crear elemento html
const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
// crear elemento de tipo texto
const $figcaptionText = document.createTextNode("Animal");

// capturamos el elemento que contiene la clase cards
const $cards = document.querySelector(".cards");

// al elemento img que creamos le asignamos sus atributos
$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animal");
// al elemento figure que creamos le agregamos la clase .card
$figure.classList.add("card");

// al figcaption que creamos le agregamos el texto con el nodo de tipo texto que creamos
$figcaption.appendChild($figcaptionText);
// al elemento figure que creamos le agregamos el elemento img
$figure.appendChild($img);
// al elemento figure que creamos le agregamos el elemento figcaption
$figure.appendChild($figcaption);

// finalmete al .cards le agregamos el elemento figure ya con todo sus partes
$cards.appendChild($figure);

/* ********************************* */

const $figure2 = document.createElement("figure");

// con innerHTML no agregamos un nodo como tal
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/tech">
<figcaption>Tech</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

/* ********************************* */

document.write("<h3>Equipos de Futbol</h3>");

const equiposDeFutbol = ["FC BARCELONA", "REAL MADRID", "LIVERPOOL", "BAYERN MUNICH", "AJAX"];

const $ul = document.createElement("ul");
$ul.style.width = "300px";
$ul.style.padding = "9px";
$ul.style.backgroundColor = "crimson";
$ul.style.color = "black";

document.body.appendChild($ul);

equiposDeFutbol.forEach(el => {
    const $li = document.createElement("li");
    $li.style.borderLeft = "2px solid black";
    $li.style.borderBottom = "1px solid black";
    $li.style.padding = "5px";
    $li.style.backgroundColor = "rgba(255,255,255,.3)";
    $li.style.textDecoration = "underline";
    $li.style.listStyle = "none";
    
    $li.textContent = el;
    
    $ul.appendChild($li)
})

/* ********************************* */

const continentes = ["Africa","Asia","America","Europa","Oceania"];
const $ul2 = document.createElement("ul");
$ul2.style.backgroundColor = "green";
$ul2.style.width = "300px";
$ul2.style.padding = "8px";

document.body.appendChild($ul2);

continentes.forEach(el => ($ul2.innerHTML += `<li style="color: white; padding: 5px">${el}</li>`));

/* ********************************* */
/* LA MEJOR FORMA DE INSERTAR AL DOM */
/* *MANERA MAS OPTIMA DE REALIZARLO* */
/* ********************************* */

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Meses del Año</h3>");

$ul3.appendChild($fragment);
document.body.appendChild($ul3);
/* 

Estilos y variables css

*/

const $linkinicio = document.querySelector(".link-inicio");

console.log($linkinicio);
// nos mmuestra todos los estilos css que existen, pero solo nos da datos del que hemos afectado
console.log($linkinicio.style);
// nos devuelve los estilos css que tiene por defecto el navegador
console.log(window.getComputedStyle($linkinicio));
// obtenemos el valor de la propiedad css
console.log(window.getComputedStyle($linkinicio).getPropertyValue("color"));

// formas de agregar estilos
$linkinicio.style.setProperty("padding", "5px");
$linkinicio.style.setProperty("text-decoration", "none");
$linkinicio.style.setProperty("text-transform", "uppercase");
$linkinicio.style.display = "block";
$linkinicio.style.maxWidth = "70px";
$linkinicio.style.textAlign = "center";
$linkinicio.style.marginTop = "8px";
$linkinicio.style.boxShadow = "5px 5px 6px rgba(0,0,0,.4)";
$linkinicio.style.borderRadius = "5px";

// varibles css - CUSTOM PROPERTIES CSS
// para acceder se hace con "style" y la notacion del punto
const $html = document.documentElement;
const $body = document.body;

// accediendo a los valores de estilo css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($body).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);

// asignando esos valores a estilos css
$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

// cambiaremos el valor de un estilo css
// solo estamos cambiando el valor 
$html.style.setProperty("--dark-color", "crimson");
// ahora vamos a obtener ese nuevo valor
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// y lo vamos a aplicar
$body.style.setProperty("background-color", varDarkColor);


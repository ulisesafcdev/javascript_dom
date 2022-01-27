/* 

acceder a clases css

*/

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className); // devuelve el valor que contiene
console.log($card.classList); // devuelve una lista de los valores que continene la class

// devuelve true o false y evalua si tiene o no la clase
console.log($card.classList.contains("sepia"));
$card.classList.add("sepia"); // agregamos clases
console.log($card.classList.contains("sepia"));
$card.classList.toggle("sepia"); // si tiene la clase, la quita, si no la agrega
console.log($card.classList.contains("sepia"));

// volvemos a agregar la clase sepia
$card.classList.toggle("sepia");

// para reemplazar una clase por otra
// el primer parametro sera la clase que ya tiene
// y el segundo parametro sera la clase que ira en vez de la que tenia
$card.classList.replace("sepia","opacity-80");

// agreagr mas de una clase
// funciona al igual que remove y toggle
$card.classList.add("cardhover","sombra");
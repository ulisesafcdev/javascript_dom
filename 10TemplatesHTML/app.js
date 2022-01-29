/* 

templates HTML, agregar contenido dinamicamente pero con templates HTML

*/

const $cards = document.querySelector(".cards");
const $template = document.getElementById("template-card").content;
const $fragment = document.createDocumentFragment();

const cardContent = [{
    title: "Tecnologia",
    img: "https://placeimg.com/200/200/tech"
},
{
    title: "Animales",
    img: "https://placeimg.com/200/200/animals"
},
{
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch"
},
{
    title: "Personas",
    img: "https://placeimg.com/200/200/people"
},
{
    title: "Nature",
    img: "https://placeimg.com/200/200/nature"
}];

// recorremos el arreglo con cada objeto que contiene
cardContent.forEach(el => {
    // accedemeos a las partes del template, ya que anteriormente accedimos al "content"

    // le asignamos sus atributos al elemento img
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    // le asignamos el texto al elemento figcaption
    $template.querySelector("figcaption").textContent = el.title;

    // el template es uno como tal. Por lo tanto, una vez estructurado como lo acabamos de hacer en
    // la linea 37 a 40. Debemos clonar ese template, y se hace de la siguiente manera:
    let $clone = document.importNode($template, true); // se indica true para que copie todo su content
    // si se pone false, solo estaria compiando las etiquetas <template></template> mas no su content

    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);

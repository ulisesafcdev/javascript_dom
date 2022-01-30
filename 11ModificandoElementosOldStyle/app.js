/* 

modificando elementos , OLD STYLE

*/

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

/* **************************************** */
// insertando elementos

// reemplazaremos un elemento existente por otro
// $cards.replaceChild($newCard, $cards.children[3]);

// insertando elemento al principio, el 2do parametro toma como referencia donde debe ir antes el elemento
// $cards.insertBefore($newCard, $cards.firstElementChild);

// eliminando un elemento
// $cards.removeChild($cards.children[0]);
// $cards.removeChild($cards.lastElementChild);


// clonando elemento
const $cloneCards = $cards.cloneNode(true);

document.body.appendChild($cloneCards);
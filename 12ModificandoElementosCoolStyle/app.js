/* 

modificando elemento de manera optima y actual

*/

/* 

.insertAdjacent
    .insertAdjacentElement(position, el)
    .insertAdjacentHTML(position, html)
    .insertAdjacentText(position, text)

position:
    beforebegin(hermano anterio)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)

*/

const $cards = document.querySelector(".cards");
const $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("afterbegin", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");

// $cards.insertAdjacentElement("beforeend", $newCard);

// $cards.append($newCard); // ultimo hijo
// $cards.prepend($newCard); // primer hijo
// $cards.after($newCard); // hermano siguiente
$cards.before($newCard); // hermano anterior

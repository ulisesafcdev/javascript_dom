/* 

insertar texto en html

*/

const $queEs = document.getElementById("que-es");

let text = `<p>El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.</p>
<p>Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.</p>
<p><mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>`;

$queEs.innerText = text;
$queEs.textContent = text;
$queEs.innerHTML = text;
$queEs.outerHTML = text;
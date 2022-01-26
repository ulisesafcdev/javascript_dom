// *********************************

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title)
console.log(document.links)
console.log(document.scripts)

setTimeout(() => {
    console.log(document.getSelection().toString());
},5000)
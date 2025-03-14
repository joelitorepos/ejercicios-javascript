let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;

let comprar = confirm(`el ancho de la pantalla es de:  y el alto de la pantalla es de:  desea comprarlo?`)

if (comprar){alert("compra realizada");}
else{alert("compra cancelada");}


let href = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocol = window.location.protocol;

let html = `protocolo: <b>${protocol}</b><br>`;
html += `hostname: <b>${hostName}</b><br>`;
html += `pathname: <b>${pathName}</b><br>`;
html += `URL completa: <b>${href}</b><br>`;

document.write(html);
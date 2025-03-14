const titulo = document.querySelector(".titulo-principal");

let resultado = titulo.textContent;
// tanto textContent como innerText no devuelven el html, solo el texto
// con text content, nos muestra el contenido sin recurrir al estilo que se muestra para el usuario
// innerText muestra el contenido visible pero no mustra el contenido oculto para el usuario
document.write(resultado + "<br>");

// nos muestra el contenido html
resultado = titulo.innerHTML;
alert(resultado);

// nos devuelve el elemento html mas completo
resultado = titulo.outerHTML;   
alert(resultado);


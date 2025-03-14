const tituloPrincipal = document.querySelector(".titulo-principal");
// add(); para agregar una clase

tituloPrincipal.classList.add("grande");

// remove(); para remover una clase
tituloPrincipal.classList.remove("grande");

// classLint.item(); nos devolvera el nombre de la clase segun la posicion que indiquemos 
let valor = tituloPrincipal.classList.item(0);

document.write(valor + "<br>"); 

// classList.contains(); verificara si lo que indicamos esta o no
valor = tituloPrincipal.classList.contains("grande");

document.write(valor + "<br>");

// classLiwst.toggle(); añade una clase si no la tiene, la elimina si la tiene
// si le damos como segundo parametro true dejara la clase si la tiene si no entonces la creara
// devuelve valores booleanos por lo que si le añadimos true, siempre devolvera true y la clase se mantendra
tituloPrincipal.classList.toggle("grande");

// classList.replace(); remplaza una clase
// nos devlvera valores booleanos, si la clase existe devolvera true
tituloPrincipal.classList.replace("grande", "pequeño")






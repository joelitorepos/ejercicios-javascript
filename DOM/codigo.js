// Document es el nodo raiz del DOM, del cual derivan todos los demas nodos.
// las etiquetas del cuerpo se pueden considerar como nodos, los nodos hacen referencia a la etiqueta html
// Element que es el tipo de nodo que estan definidos por las etiquetas en html
// Text: el texto dentro de un elemento document se considera un nuevo nodo hijo de tipo text
// Attribute: en javascript son como informacion que esta asociada a un nodo element
// comentarios y otros: los comentarios tambien pueden generar nodos asi como DOCTYPE
// Los tipos de nodos tienen asociados un valor, el element node tiene un valor de 1, el text node tiene un valor de 3, el attribute node tiene un valor de 2

// -------- METODOS DE SELECCION DE ELEMENTOS --------

// los metodos hay que aplicarlos a un objeto, en este caso el objeto es document

// selecciona los elementos con el id que le indiquemos
parrafo = document.getElementById("contenido");

document.write(parrafo);

// nos devolvera una lista de elementos con todos los elementos que tengan la clase que le indiquemos
parrafo = document.getElementsByTagName("div");

document.write(parrafo);

// el getElementById es mas optimo a la hora de seleccionar un id, pero este tambien puede seleccionar id's y clases
parrafo = document.querySelector(",parrafo");

document.write(parrafo);

// crea una lista de nodos con todos los elementos que contengan la clase que le indiquemos, no es un array pero aun se pueden seleccionar por el indice
parrafo = document.querySelectorAll(".parrafo");

document.write(parrafo);

// METODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS

const rangoEdad = document.querySelector(".rangoEdad");

document.write(rangoEdad);
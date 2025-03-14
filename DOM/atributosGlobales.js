// los atributos globales son todos los atributos que tienen todos los elementos en comun

const parrafo = document.querySelector(".parrafo");

// solo admite valores booleanos y con el podemos hacer que un elemento sea editable
// si vamos a cualquier pagina y le damos a incpeccionar, podemos convertir cualquier elemento en editable con elementeditable="true"
parrafo.setAttribute("contentEditable", "true");

// dir tiene tres valores y sirve para modificar la direccion del texto
// de derecha a izquierda o izquierda a derecha
parrafo.setAttribute("dir", "ltr");

// puede ocultar el elementos pero no lo elimina, si esta definida no importa el valor que tenga se mostrara eliminada, para que se muestre hay que eliminar el atributo
// parrafo.setAttribute("hidden". "true");

// style tambien es un atributo global

// con este atributo podemos hacer focus a un elemento como en los input
// se le da de segundo parametro un numero que indica la posicion en la que se encuentra el elemento, y cuando aprete el tab se ira al elemento en orden de menor a mayor segun el numeroque le demos
parrafo.setAttribute("tabindex", "0");

// sirve para que cuando pongamos el mouse encima nos muestre el mensaje que dejemos en el segundo parametro
parrafo.setAttribute("title", "esta cosa es un titulo");



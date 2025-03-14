// metodo open
// ABRIR UNA PESTAÑA APARTE
// EN ESTE CASO ABRE LA PESTAÑA DE YOUTUBE
const youtubeURL = "https://youtube.com";
let ventana = window.open(youtubeURL);
// la ventana DE YOUTUBE se cierra
ventana.close();

// devolvera en valores booleanos si la ventana esta abierta o cerrada
ventana.closed();

// detiene la recarga de recursos de la pagina
// stop()

// para mostrar un mensaje al usuario
// alert()

// nos saltan las opciones para imprimir
// print()

// pide un dato y devuelve cadena de texto
// prompt()

// devuelve en valores booleanos la respuesta del usuario si da aceptar sera true
// confirm();

// si ponemos console punto log nos devolvera las propiedades de screen
const screen = window.screen;

// devolvera el ancho del screen
document.write(screen.availWidth)

// Devolvera en pixeles la distancia entre el borde izquierdo de la ventana y el borde izquierdo de nuestro computador y no se pueden modificar estos valores
// window.screenLeft

// Devolvera en pixeles la distancia entre el borde superops de la ventana y el borde superior de nuestro computador y no se pueden modificar estos valores
// window.screenTop

// devueelve cuanto se desplazo el documento en el eje horizontal
// const scrollX = window.scrollX;

// devueelve cuanto se desplazo el documento en el eje vertical
// const scrollY = window.scrollY;

// el primer parametro recibe cuanto se desplaza en el ejeY y el segundo parametro en el ejeX
// window.scroll()

// para cambiar el tamaño de la ventana
// ventana.resizeBy(100,200)

// para cambiar el tamaño de la ventana pero este es relativo, creo que se refiere a medidas porcentuales
// ventana.resizeTo(100,200)

// mueve la ventana en una ubicacion relativa
// ventana.moveBy()

// mueve la ventana en una ubicacion fija
// ventana.moveTo()

// devolvera valores booleanos segun si es visible o no
// window.locationBat.visible
// y asimismo con: menubar,personalbar, scrollbars, statusbar, toolbar.

// dice en donde esta localizado el archivo
// const href = window.location.href;

// nos devuelve el dominio y el subdominio
// const hostName = window.location.hostname;

// nos devuelve el path name o la ruta de donde estamos desde el origen, como el codigo no esta publicado se podria decir, el origen es file
// const pathName = window.location.pathname;

// devuelve http si no es seguro, como es seguro retornara https
// const protocol = window.location.protocol;

// carga el archivo que nosotros indiquemos
// const protocol = window.location.assign("https://youtube.com");







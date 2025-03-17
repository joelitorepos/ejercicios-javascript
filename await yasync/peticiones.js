async function obtenerDatos() {
    try {
        // Espera la respuesta del servidor
        const respuesta = await fetch("https://api.ejemplo.com/datos");

        // Espera a que los datos se conviertan a JSON
        const datos = await respuesta.json();

        // Una vez listo, los imprime en la consola
        console.log("Datos recibidos:", datos);
    } catch (error) {
        // Manejo de errores si fetch o JSON falla
        console.log("Error al obtener los datos:", error);
    }
}

obtenerDatos();

// EJEMPLO DE PETICION CON FETCH Y ASYNC Y AWAIT
const botonEnviar = document.getElementById('enviar-nota');

botonEnviar.addEventListener('click', () => {
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById('nota-alumno').value);
        if(isNaN(prevRes)){
            throw "no es un numero";
        }
        mensaje = definirMensaje(prevRes);
        resultado = verificarAprovacion(8,5,prevRes);
    } catch (error) {
        resultado = "TE PILLE";
        mensaje = "he descubierto que has intentado hackear el sitio";
    }
    abrirModal(resultado,mensaje); 
})

const definirMensaje = (pr)=>{
    let resultado;
    if (pr == 1 || pr == 2) resultado = "nota muy mala";
    else if (pr == 3 || pr == 4) resultado = "nota mala";
    else if (pr == 5 || pr == 6) resultado = "nota regular";
    else if (pr == 7 || pr == 8) resultado = "nota buena";
    else if (pr == 9 || pr == 10) resultado = "nota excelente";
    else resultado = null;
    return resultado;
}

const verificarAprovacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if (promedio >= 7){
        return "<div class='green'>Aprobado</div>";
    }
    return "<div class='red'>Desaprobado</div>";
}


const abrirModal = (res,msg)=>{
    document.querySelector('.resultado').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = msg;
    let modal = document.querySelector(".modal__wrapper");
    modal.style.display = "block";
}
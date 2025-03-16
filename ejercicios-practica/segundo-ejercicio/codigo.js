let pase = true, hora = 1;

do{
    let edad = prompt("que edad tienes?");
    
    if(edad < 18){alert("lo siento, no podes pasar");}
    
    if(hora > 2 && pase === true){
        alert("felicidades te ganaste un pase gratis!");
        pase = false;
    }
    else{alert("tienes que pagar tu entrada");}
    
    hora++;
}while(hora < 10);


"strict mode";

const cambiarTamaño = tamaño => {
    return () =>{
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}

let px12 = cambiarTamaño(12);
let px14 = cambiarTamaño(14);
let px16 = cambiarTamaño(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);

// ejemplo de clausuras
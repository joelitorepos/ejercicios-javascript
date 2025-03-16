let alumnos = parseInt(prompt("cuantos alumnos hay en el salon?"));
const dias = 3;
let totalAlumnos = [];

for(let i = 0; i < alumnos; i++){
    let nombre = prompt("ingrese el nombre del alumno");
    totalAlumnos.push([nombre, 0, 0]);
}

for(let i = 0; i < dias; i++){
    for (let j = 0; j < alumnos; j++) {
        let presencia = prompt(`${totalAlumnos[j][0]} se presento esta clase? p para presente`);
        if(presencia.toLowerCase() === "p"){
            totalAlumnos[j][1]++;
        }
        else{
            totalAlumnos[j][2]++;
        }
    }
}

for (let i = 0; i < alumnos; i++) {
    let totalPresencia = `el total de presencias del alumno ${totalAlumnos[i][0]} es de: ${totalAlumnos[i][1]}`;
    let totalAusencia = `el total de ausencias del alumno ${totalAlumnos[i][0]} es de: ${totalAlumnos[1][2]}`;
    document.write(totalPresencia + "<br>");
    document.write(totalAusencia + "<br>");
}

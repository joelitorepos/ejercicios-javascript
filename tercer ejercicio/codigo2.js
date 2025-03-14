
class App {
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }
    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }
    abrir(){
        if(this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app encendida");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        descargas: <b>${this.descargas}</b><br>
        puntuacion: <b>${this.puntuacion}</b><br>
        peso: <b>${this.peso}</b><br>
        `;
    }
}

const app = new App("16.000","5 estrellas","900mb");
const app2 = new App("1.000","4 estrellas","400mb");
const app3 = new App("6.000","4.5 estrellas","100mb");
const app4 = new App("23.000","4.8 estrellas","1gb");
const app5 = new App("900","5 estrellas","250mb");
const app6 = new App("17","3.7 estrellas","522mb");
const app7 = new App("42.981","2.9 estrellas","723mb");

app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

document.write(`
    ${app.appInfo()}
    ${app2.appInfo()}
    ${app3.appInfo()}
    ${app4.appInfo()}
    ${app5.appInfo()}
    ${app6.appInfo()}
    ${app7.appInfo()}
`);
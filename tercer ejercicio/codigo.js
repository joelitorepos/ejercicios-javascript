class Celular {
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        // VARIABLE
        this.encendido = false;
    }
    PresionarBotonEncendido(){
        if(this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }
        else{
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true){
            alert("reiniciando celular");
        }
        else{alert("el celular esta apagado");}
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
    }
    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        color: <b>${this.color}</b><br>
        peso: <b>${this.peso}</b><br>
        tamaño: <b>${this.tamaño}</b><br>
        resolucion de video: <b>${this.resolucionDeCamara}</b><br>
        memoria ram: <b>${this.memoriaRam}</b><br>`;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `resolucion de camara extra: ${this.resolucionDeCamaraExtra} <br>`;
    }
}

const celular1 = new Celular("rojo","150g","5'","full HD", "1GB");
const celular2 = new Celular("negro","155g","5.4'","full HD", "2GB");
const celular3 = new Celular("blanco","146g","5.9'","full HD", "2GB");

const celular1AG = new CelularAltaGama("rojo","130g","5.2'","4K","3GB","full HD");
const celular2AG = new CelularAltaGama("negro","142g","6'","4K","3GB","HD");

// celular1.PresionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.PresionarBotonEncendido();


document.write(`
    ${celular1.mobileInfo()}<br>
    ${celular2.mobileInfo()}<br>
    ${celular3.mobileInfo()}<br>
`);

document.write(`
    ${celular1AG.infoAltaGama()}<br>
    ${celular2AG.infoAltaGama()}<br>
`);

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
    ${app.appInfo()}<br>
    ${app2.appInfo()}<br>
    ${app3.appInfo()}<br>
    ${app4.appInfo()}<br>
    ${app5.appInfo()}<br>
    ${app6.appInfo()}<br>
    ${app7.appInfo()}<br>
`);
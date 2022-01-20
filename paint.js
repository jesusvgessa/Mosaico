//variable globales
var pintaActivo = false;
var colorActivo = "color1";

//Para traernos el id
function getId(elemento) {
    return document.getElementById(elemento);
}

//Para crear las funciones
function crearEvento(elemento, evento, mifuncion) {
    elemento.addEventListener(evento, mifuncion);
}

/* FUNCIONES */
crearEvento(window, "load", iniciar);
crearEvento(window, "load", panelSeleccionado);
crearEvento(window, "load", mensajeDibujar);
crearEvento(window, "load", dibujar);

function iniciar() {
    //Creo la tabla
    var tableroDibujo = document.createElement("table");

    //Tengo que crear 30 filas, por lo que hago un bucle para
    for (var i = 0; i < 30; i++) {
        var fila = document.createElement("tr");
        //Ahora crear las celdas de cada fila
        for (var j = 0; j < 30; j++) {
            var celda = document.createElement("td");
            //Añado la celda a la fila
            fila.appendChild(celda);
        }//Fin Para
        //Añado la fila al tablero
        tableroDibujo.appendChild(fila);
    }//Fin Para
    tableroDibujo.setAttribute("class", "tablerodibujo");
    tableroDibujo.setAttribute("id", "tablerodibujo");
    tableroDibujo.setAttribute("border", "2px");
    var zonaDibujo = getId("zonadibujo");
    zonaDibujo.appendChild(tableroDibujo);
}

function panelSeleccionado() {
    var coloresPaleta = document.querySelectorAll("#paleta td");
    coloresPaleta.forEach(elemento => crearEvento(elemento, "click", cambiarPanel));

    function cambiarPanel() {
        for (var i = 0; i < coloresPaleta.length - 1; i++) {
            if (coloresPaleta[i].classList.length > 1) {
                coloresPaleta[i].classList.remove("seleccionado");
            }//Fin Si
        }//Fin Para
        this.classList.add("seleccionado");
        colorActivo = this.classList[0];
    }
}

function mensajeDibujar() {
    crearEvento(getId("tablerodibujo"), "click", cambiarMensaje);

    function cambiarMensaje() {
        pintaActivo = !pintaActivo;
        if(pintaActivo){
            getId("pincel").innerHTML = "PINCEL ACTIVADO";
        } else {
            getId("pincel").innerHTML = "PINCEL DESACTIVADO";
        }//Fin Si
    }
}

function dibujar(){
    var celdas = document.querySelectorAll("#tablerodibujo td");
    celdas.forEach(celda => crearEvento(celda,"mouseover",pintando));

    function pintando(){
        if(pintaActivo){
            this.setAttribute("class",colorActivo);
        }
    }
}
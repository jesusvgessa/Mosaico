//Para traernos el id
function getId(elemento){
    return document.getElementById(elemento);
}

//Para crear las funciones
function crearEvento(elemento,evento,mifuncion){
    elemento.addEventListener(evento,mifuncion,false);
}

crearEvento(window,"load",iniciar);

function iniciar(){
    //Creo la tabla
    var tableroDibujo = document.createElement("table");

    //Tengo que crear 30 filas, por lo que hago un bucle para
    for(var i=0;i<30;i++){
        var fila = document.createElement("tr");
        //Ahora crear las celdas de cada fila
        for(var j=0;j<30;j++){
            var celda = document.createElement("td");
            //Añado la celda a la fila
            fila.appendChild(celda);
        }//Fin Para
        //Añado la fila al tablero
        tableroDibujo.appendChild(fila);
    }//Fin Para
    tableroDibujo.setAttribute("class","tablerodibujo");
    tableroDibujo.setAttribute("border","2px");
    var zonaDibujo = getId("zonadibujo");
    zonaDibujo.appendChild(tableroDibujo);
}


var tit = document.getElementById("titulo");
var desc = document.getElementById("descripcion");
var i = 0;
var filita = "";
var estado = 0;
function agregar(){  
    if(estado==0){
        alert("save");
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    var celda_titulo = document.createElement("td");
    celda_titulo.innerHTML=tit.value;
    var celda_descripcion = document.createElement("td");
    celda_descripcion.innerHTML=desc.value;
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";

    fila.appendChild(celda_titulo);
    fila.appendChild(celda_descripcion);
    fila.appendChild(celda_accion);
    tbody.appendChild(fila);
    table.appendChild(tbody);
    limpiar();
    i+=1;
    }else{
        alert("editar");
        filita.cells[0].innerHTML = tit.value;
        filita.cells[1].innerHTML = desc.value;
        filita = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    tit.value="";
    desc.value="";
    tit.focus();
}
function editar(row){
    filita = row.parentNode.parentNode;  
    tit.value = filita.cells[0].innerHTML;
    desc.value = filita.cells[1].innerHTML;
    estado = 1;
}
function eliminar(row){
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}
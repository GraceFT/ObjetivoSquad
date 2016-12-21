function calcular()
{
    var puntosSquad = document.getElementById("puntosSquad").value;
    var maxPuntos = document.getElementById("maxPuntos").value;
    //(100*puntoSquad)/maxPuntos
    var resultadoSquad = (100 * puntosSquad)/maxPuntos;
    
    if (resultadoSquad >= 80){
        document.getElementById("salida").innerHTML = "Muy bien Squad!";
    }else{
        document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
    }
}
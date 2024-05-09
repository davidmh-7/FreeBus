function updateDestino() {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var horaSalida = document.getElementById("horaSalida");

    // Obtener el valor seleccionado en el origen y en el destino
    var origenValue = origen.value;
    var destinoValue = destino.value;

    // Habilitar todas las opciones en ambos campos primero
    for (var i = 0; i < origen.options.length; i++) {
        origen.options[i].disabled = false;
    }
    for (var j = 0; j < destino.options.length; j++) {
        destino.options[j].disabled = false;
    }

    // Si se ha seleccionado una opción en el destino
    if (destinoValue !== "0") {
        // Deshabilitar la opción seleccionada en el origen
        origen.querySelector('option[value="' + destinoValue + '"]').disabled = true;
    }

    // Si se ha seleccionado una opción en el origen
    if (origenValue !== "0") {
        // Deshabilitar la opción seleccionada en el destino
        destino.querySelector('option[value="' + origenValue + '"]').disabled = true;
        
        // Limpiar el campo de destino
        destino.value = "0";
    }
    

}

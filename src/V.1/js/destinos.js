function updateHorariosDisponibles() {
    var origen = document.getElementById("origen");
    var destino = document.getElementById("destino");
    var horaSalidaContainer = document.getElementById("horaSalidaContainer");
    var horaSalidaSelect = document.getElementById("horaSalida");

    var horariosDisponibles = [];

    // Obtener el origen y el destino seleccionados
    var origenValue = origen.value;
    var destinoValue = destino.value;

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

    if (origenValue !== "0") {
        destino.querySelector('option[value="' + origenValue + '"]').disabled = true;
    }


    // Lógica para determinar los horarios disponibles según el origen y el destino
    switch (origenValue) {
        case "BILBAO":
            switch (destinoValue) {
                case "DONOSTIA-SAN SEBASTIAN":

                    for (var hora = 6; hora <= 22; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":30";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;
                case "BILBAO":
                    alertLlamada();
                    break;

                case "VITORIA-GASTEIZ":

                    alertLlamada();
                    break;

                case "AEROPUERTO BILBAO":
                    alertLlamada();
                    break;

                // Agrega más casos para otros destinos desde Bilbao si es necesario
                default:
                    break;
            }
            break;
        case "DONOSTIA-SAN SEBASTIAN":
            switch (destinoValue) {
                case "BILBAO":

                    for (var hora = 6; hora <= 22; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":00";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;

                case "VITORIA-GASTEIZ":

                    for (var hora = 6; hora <= 22; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":15";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;

                case "AEROPUERTO BILBAO":

                    for (var hora = 5; hora <= 21; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":15";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;
                default:
                    break;
            }
            break;

        case "VITORIA-GASTEIZ":
            switch (destinoValue) {
                case "DONOSTIA-SAN SEBASTIAN":

                    for (var hora = 5; hora <= 22; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":45";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;
                case "BILBAO":
                    alertLlamada();
                    break;

                case "VITORIA-GASTEIZ":

                    alertLlamada();
                    break;

                case "AEROPUERTO BILBAO":
                    alertLlamada();
                    break;
                default:
                    break;
            }
            break;

        case "AEROPUERTO BILBAO":
            switch (destinoValue) {
                case "DONOSTIA-SAN SEBASTIAN":

                    for (var hora = 6; hora <= 22; hora++) {
                        var horaFormateada = hora < 10 ? "0" + hora : hora;
                        var horaCompleta = horaFormateada + ":45";
                        horariosDisponibles.push({ text: horaCompleta, value: horaCompleta });
                    }
                    break;
                case "BILBAO":
                    alertLlamada();
                    break;

                case "VITORIA-GASTEIZ":

                    alertLlamada();
                    break;

                case "AEROPUERTO BILBAO":
                    alertLlamada();
                    break;
                default:
                    break;
            }
            break;



        default:
            break;
    }

    horaSalidaSelect.innerHTML = "";


    for (var i = 0; i < horariosDisponibles.length; i++) {
        var option = document.createElement("option");
        option.text = horariosDisponibles[i].text;
        option.value = horariosDisponibles[i].value;
        horaSalidaSelect.add(option);
    }


    if (horariosDisponibles.length > 0) {
        horaSalidaContainer.style.display = "grid";
    } else {
        horaSalidaContainer.style.display = "none";
    }


    function alertLlamada() {
        var xAlert = document.getElementById("AlertQuitar");
        xAlert.style.display = "";
        let contador = 0;
        let procentajeBarra = document.getElementById('progress-bar');
        let intervalo = setInterval(() => {
            contador++;

            procentajeBarra.style.width = contador + "%";
            if (contador >= 100) {
                clearInterval(intervalo);
            }
        }, 30);
        setTimeout(() => {
            var xAlert = document.getElementById("AlertQuitar");
            xAlert.style.display = "none";
        }, 3000);
    }

}

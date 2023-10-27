alert('Bienvenido a Mardel Air')

const costoPorDia = 1500;

let viaje = []

function solicitarDestino(){

    let destino = "Elegi el destino a viajar: \n1. Santa Fe \n2. Salta \n3. Tierra del fuego";

    let solicitudDestino = Number(prompt(destino));

    return solicitudDestino;

}

function solicitarEstadia() {

    let estadia = parseInt(prompt("Ingrese la cantidad de días:"));

    return parseInt(estadia);
}


function reservarViaje(){

    let destino = solicitarDestino();
    let dias = solicitarEstadia();

    let total = costoPorDia * dias;

    alert('Resumen de la reserva: \nDestino:' + destino, '\nDias de estadía:' + dias, '\nTotal a pagar: $' + total);

}

reservarViaje();

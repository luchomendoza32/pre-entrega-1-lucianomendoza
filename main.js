
function calcularCuotas(monto, cuotas) {
    const montoPorCuota = monto / cuotas;
    return montoPorCuota;
}

const montoTotal = parseFloat(prompt("Ingrese el monto total:"));
const numeroDeCuotas = parseInt(prompt("Ingrese el número de cuotas:"));


if ( montoTotal => 0, numeroDeCuotas => 0) {

    const montoPorCuota = calcularCuotas(montoTotal, numeroDeCuotas);

    alert(`Monto por Cuota: ${montoPorCuota}`);
   
} else {
    alert("Por favor, ingrese valores válidos.");
}
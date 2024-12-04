// Valor base de la matrícula
const valorMatricula = 7000000;

// Solicitar al estudiante la opción de pago
let opcionPago = prompt(
    "Seleccione la forma de pago:\n1. Pago completo (5% de descuento)\n2. Pago en 2 cuotas (2% de interés mensual)\n3. Pago en 3 cuotas (2% de interés mensual)"
);

// Variable para almacenar el valor total y el desglose de cuotas
let valorTotal = 0;
let mensaje = "";

// Calcular el valor según la opción seleccionada
switch (opcionPago) {
    case "1": // Pago completo
        valorTotal = valorMatricula * 0.95; // Aplicar 5% de descuento
        mensaje = `Ha seleccionado: Pago completo.\nValor total a pagar con descuento: $${valorTotal.toFixed(2)}.`;
        break;
    case "2": // Pago en 2 cuotas
        valorTotal = valorMatricula * (1 + 0.02 * 2); // Aplicar 2% de interés mensual por 2 meses
        let cuota2 = valorTotal / 2;
        mensaje = `Ha seleccionado: Pago en 2 cuotas.\nValor total con interés: $${valorTotal.toFixed(2)}.\nCada cuota será de: $${cuota2.toFixed(2)}.`;
        break;
    case "3": // Pago en 3 cuotas
        valorTotal = valorMatricula * (1 + 0.02 * 3); // Aplicar 2% de interés mensual por 3 meses
        let cuota3 = valorTotal / 3;
        mensaje = `Ha seleccionado: Pago en 3 cuotas.\nValor total con interés: $${valorTotal.toFixed(2)}.\nCada cuota será de: $${cuota3.toFixed(2)}.`;
        break;
    default: // Opción inválida
        mensaje = "Error: Opción de pago inválida. Por favor, seleccione 1, 2 o 3.";
        break;
}

// Mostrar el mensaje al usuario
console.log(mensaje);

// Solicitar el tipo de servicio al usuario
let servicio = prompt("Seleccione el tipo de servicio:\n1. Lavado básico ($2000 por pieza)\n2. Lavado premium ($4000 por pieza)");

// Solicitar la cantidad de piezas de ropa al usuario
let cantidadPiezas = parseInt(prompt("Ingrese la cantidad de piezas de ropa (mínimo 1, máximo 20):"));

// Verificar que la cantidad de piezas esté dentro del rango permitido
if (cantidadPiezas < 1 || cantidadPiezas > 20 || isNaN(cantidadPiezas)) {
    console.log("Error: La cantidad de piezas debe estar entre 1 y 20.");
} else {
    // Variable para almacenar el costo total
    let costoTotal = 0;

    // Calcular el costo según el tipo de servicio
    switch (servicio) {
        case "1": // Lavado básico
            costoTotal = cantidadPiezas * 2000;
            console.log(`Servicio seleccionado: Lavado básico.\nCantidad de piezas: ${cantidadPiezas}.\nCosto total: $${costoTotal}.`);
            break;
        case "2": // Lavado premium
            costoTotal = cantidadPiezas * 4000;
            console.log(`Servicio seleccionado: Lavado premium.\nCantidad de piezas: ${cantidadPiezas}.\nCosto total: $${costoTotal}.`);
            break;
        default:
            console.log("Error: Opción de servicio inválida.");
            break;
    }
}

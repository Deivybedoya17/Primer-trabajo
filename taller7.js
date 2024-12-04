// Precios por localidad
const precios = {
    general: 50000,
    preferencial: 150000,
    vip: 300000
};

// Función para calcular el total
function calcularTotal(localidad, cantidad) {
    const precioBase = precios[localidad.toLowerCase()] || 0;
    if (precioBase === 0) return null; // Localidad inválida

    const subtotal = precioBase * cantidad;
    const impuestos = subtotal * 0.1; // 10% de impuestos
    const cargoServicio = 5000 * cantidad; // $5000 por boleta
    const total = subtotal + impuestos + cargoServicio;

    return { subtotal, impuestos, cargoServicio, total };
}

// Solicitar la localidad al usuario
let localidad = prompt(
    "Seleccione la localidad:\n1. General ($50000)\n2. Preferencial ($150000)\n3. VIP ($300000)"
);

localidad = localidad === "1" ? "general" : localidad === "2" ? "preferencial" : localidad === "3" ? "vip" : null;

if (!localidad) {
    console.log("Error: Localidad no válida.");
} else {
    // Solicitar la cantidad de boletas
    let cantidad = parseInt(prompt("Ingrese la cantidad de boletas (máximo 5):"));

    // Validar la cantidad
    if (isNaN(cantidad) || cantidad < 1 || cantidad > 5) {
        console.log("Error: La cantidad de boletas debe ser entre 1 y 5.");
    } else {
        // Calcular costos
        const costos = calcularTotal(localidad, cantidad);

        if (!costos) {
            console.log("Error: No se pudo calcular el total. Verifique los datos ingresados.");
        } else {
            // Solicitar método de pago
            let metodoPago = prompt(
                "Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta de crédito"
            );

            if (metodoPago !== "1" && metodoPago !== "2") {
                console.log("Error: Método de pago no válido.");
            } else {
                // Mostrar desglose y total
                console.log(
                    `Resumen de la compra:\nLocalidad: ${localidad.toUpperCase()}\nCantidad: ${cantidad}\n` +
                    `Subtotal: $${costos.subtotal.toFixed(2)}\nImpuestos: $${costos.impuestos.toFixed(2)}\n` +
                    `Cargo por servicio: $${costos.cargoServicio.toFixed(2)}\nTotal a pagar: $${costos.total.toFixed(2)}\n` +
                    `Método de pago: ${metodoPago === "1" ? "Efectivo" : "Tarjeta de crédito"}`
                );
            }
        }
    }
}
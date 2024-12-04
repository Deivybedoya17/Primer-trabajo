// Menús y precios de los restaurantes
const menu = {
    hamburguesas: {
        "Hamburguesa simple": 25000
    },
    pizzeria: {
        "Pizza familiar": 85000
    },
    comida_china: {
        "Fideos con pollo": 18000
    }
};

// Costo fijo de envío
const costoEnvio = 5000;

// Solicitar el restaurante al usuario
let restaurante = prompt(
    "Seleccione el restaurante:\n1. Hamburguesas\n2. Pizzería\n3. Comida China"
);

// Validar restaurante seleccionado
let opciones;
switch (restaurante) {
    case "1":
        opciones = menu.hamburguesas;
        break;
    case "2":
        opciones = menu.pizzeria;
        break;
    case "3":
        opciones = menu.comida_china;
        break;
    default:
        console.log("Error: Restaurante no válido.");
        opciones = null;
}

if (opciones) {
    // Mostrar menú del restaurante
    let menuSeleccion = Object.entries(opciones)
        .map((item, index) => `${index + 1}. ${item[0]} ($${item[1]})`)
        .join("\n");

    let opcionMenu = prompt(`Seleccione una opción del menú:\n${menuSeleccion}`);

    // Validar la opción seleccionada
    let platillo = Object.keys(opciones)[opcionMenu - 1];
    let precio = Object.values(opciones)[opcionMenu - 1];

    if (!platillo) {
        console.log("Error: Opción de menú no válida.");
    } else {
        // Solicitar la cantidad
        let cantidad = parseInt(prompt(`¿Cuántos ${platillo} desea pedir?`));

        // Validar cantidad
        if (isNaN(cantidad) || cantidad < 1) {
            console.log("Error: Cantidad no válida.");
        } else {
            // Calcular subtotal y total
            let subtotal = precio * cantidad;
            let total = subtotal + costoEnvio;

            // Verificar el mínimo de compra
            if (subtotal < 23000) {
                console.log(
                    `El subtotal de su pedido es de $${subtotal}. El mínimo de compra es $23000.`
                );
            } else {
                // Solicitar método de pago
                let metodoPago = prompt(
                    "Seleccione el método de pago:\n1. Efectivo\n2. Tarjeta débito/crédito"
                );

                if (metodoPago !== "1" && metodoPago !== "2") {
                    console.log("Error: Método de pago no válido.");
                } else {
                    // Mostrar resumen del pedido
                    console.log(
                        `Resumen del pedido:\nRestaurante: ${restaurante === "1" ? "Hamburguesas" : restaurante === "2" ? "Pizzería" : "Comida China"}\n` +
                        `Platillo: ${platillo}\nCantidad: ${cantidad}\nSubtotal: $${subtotal}\nCosto de envío: $${costoEnvio}\n` +
                        `Total a pagar: $${total}\n` +
                        `Método de pago: ${metodoPago === "1" ? "Efectivo" : "Tarjeta débito/crédito"}\n` +
                        `Tiempo estimado de entrega: 45 minutos a 1 hora.`
                    );
                }
            }
        }
    }
}

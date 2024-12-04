// Precios base según el modelo y material
const precios = {
    dura_sintetica: 8000,
    dura_natural: 10000,
    cepillo_sintetico: 12000,
    cepillo_natural: 15000,
    suave_sintetica: 8000, // Puedes añadir más modelos si es necesario
    suave_natural: 10000,
    mango_largo: 2000,
    gancho_punta: 500
};

// Solicitar el modelo de escoba al usuario
let modelo = prompt(
    "Seleccione el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. Cepillo"
);

// Solicitar el material al usuario
let material = prompt(
    "Seleccione el material de las cerdas:\n1. Sintéticas\n2. Naturales"
);

// Opciones adicionales
let opcionAdicional = prompt(
    "Seleccione una opción adicional (opcional):\n1. Mango largo ($2.000)\n2. Gancho en punta ($500)\n3. Ninguna"
);

// Solicitar la cantidad de escobas
let cantidad = parseInt(prompt("Ingrese la cantidad de escobas a fabricar (mínimo 3, máximo 30):"));

// Validar entradas
if (
    (modelo !== "1" && modelo !== "2" && modelo !== "3") ||
    (material !== "1" && material !== "2") ||
    (opcionAdicional !== "1" && opcionAdicional !== "2" && opcionAdicional !== "3") ||
    (cantidad < 3 || cantidad > 30 || isNaN(cantidad)) ||
    (opcionAdicional === "1" && opcionAdicional === "2") // No combinar mango largo y gancho en punta
) {
    console.log("Error: Ha ingresado opciones inválidas. Verifique los datos e intente nuevamente.");
} else {
    // Determinar el precio base según el modelo y material
    let precioBase;
    switch (modelo) {
        case "1": // Escoba dura
            precioBase = material === "1" ? precios.dura_sintetica : precios.dura_natural;
            break;
        case "2": // Escoba suave
            precioBase = material === "1" ? precios.suave_sintetica : precios.suave_natural;
            break;
        case "3": // Cepillo
            precioBase = material === "1" ? precios.cepillo_sintetico : precios.cepillo_natural;
            break;
    }

    // Agregar el costo de la opción adicional si se seleccionó
    let adicional = 0;
    if (opcionAdicional === "1") {
        adicional = precios.mango_largo;
    } else if (opcionAdicional === "2") {
        adicional = precios.gancho_punta;
    }

    // Calcular el precio total
    let total = (precioBase + adicional) * cantidad;

    // Mostrar el resultado al usuario
    console.log(`Modelo seleccionado: ${modelo === "1" ? "Escoba dura" : modelo === "2" ? "Escoba suave" : "Cepillo"}.\n` +
                `Material: ${material === "1" ? "Sintético" : "Natural"}.\n` +
                `Opción adicional: ${opcionAdicional === "1" ? "Mango largo" : opcionAdicional === "2" ? "Gancho en punta" : "Ninguna"}.\n` +
                `Cantidad: ${cantidad}.\n` +
                `Total a pagar: $${total.toFixed(2)}.`);
}

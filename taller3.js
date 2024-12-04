// Precios base de los modelos
const precios = {
    clasicos: 500000,
    running: 800000,
    basketball: 1000000
};

// Solicitar el modelo al usuario
let modelo = prompt(
    "Seleccione el modelo de tenis:\n1. Clásicos ($500.000)\n2. Running ($800.000)\n3. Basketball ($1.000.000)"
);

// Solicitar la talla al usuario
let talla = parseInt(prompt("Ingrese la talla (entre 35 y 44):"));

// Solicitar la cantidad al usuario
let cantidad = parseInt(prompt("Ingrese la cantidad de pares a comprar (mínimo 1, máximo 5):"));

// Validar las entradas
if ((modelo !== "1" && modelo !== "2" && modelo !== "3") || isNaN(talla) || talla < 35 || talla > 44 || isNaN(cantidad) || cantidad < 1 || cantidad > 5) {
    console.log("Error: Ha ingresado una opción inválida. Verifique los datos e intente nuevamente.");
} else {
    // Determinar el precio del modelo seleccionado
    let precioBase;
    switch (modelo) {
        case "1":
            precioBase = precios.clasicos;
            break;
        case "2":
            precioBase = precios.running;
            break;
        case "3":
            precioBase = precios.basketball;
            break;
    }

    // Calcular el total sin descuento
    let total = precioBase * cantidad;

    // Aplicar descuento si corresponde
    if (cantidad >= 3) {
        total *= 0.9; // Aplicar 10% de descuento
    }

    // Mostrar el resultado al usuario
    console.log(`Modelo seleccionado: ${modelo === "1" ? "Clásicos" : modelo === "2" ? "Running" : "Basketball"}.\nTalla: ${talla}.\nCantidad: ${cantidad}.\nTotal a pagar: $${total.toFixed(2)}.`);
}

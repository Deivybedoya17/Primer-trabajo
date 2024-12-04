// Tarifas de préstamo por día según la categoría
const tarifas = {
    bestsellers: 500,
    literatura: 100,
    academicos: 0
};

// Función para calcular el costo de un libro
function calcularCosto(categoria, dias) {
    let tarifa = tarifas[categoria.toLowerCase()] || 0; // Obtener la tarifa de la categoría
    let costo = tarifa * dias; // Calcular el costo base

    // Aplicar descuento si los días son mayores a 10 y no es categoría académicos
    if (dias > 10 && categoria.toLowerCase() !== "academicos") {
        costo *= 0.9; // Aplicar 10% de descuento
    }

    return costo;
}

// Solicitar la cantidad de libros a pedir
let cantidadLibros = parseInt(prompt("Ingrese la cantidad de libros a solicitar (máximo 5):"));

// Validar la cantidad de libros
if (isNaN(cantidadLibros) || cantidadLibros < 1 || cantidadLibros > 5) {
    console.log("Error: La cantidad de libros debe ser entre 1 y 5.");
} else {
    let totalCosto = 0;

    // Iterar por cada libro solicitado
    for (let i = 1; i <= cantidadLibros; i++) {
        let titulo = prompt(`Ingrese el título del libro ${i}:`);
        let categoria = prompt(`Ingrese la categoría del libro ${i} (Bestsellers, Literatura, Académicos):`);
        let dias = parseInt(prompt(`Ingrese la cantidad de días para el libro ${i} (máximo 30 días):`));

        // Validar la cantidad de días
        if (isNaN(dias) || dias < 1 || dias > 30) {
            console.log(`Error: La cantidad de días para el libro "${titulo}" debe ser entre 1 y 30.`);
            continue; // Saltar al siguiente libro
        }

        // Calcular el costo del libro
        let costo = calcularCosto(categoria, dias);
        totalCosto += costo;

        console.log(`Libro ${i}: "${titulo}"\nCategoría: ${categoria}\nDías: ${dias}\nCosto: $${costo.toFixed(2)}\n`);
    }

    // Mostrar el costo total del préstamo
    console.log(`Costo total del préstamo: $${totalCosto.toFixed(2)}`);
}

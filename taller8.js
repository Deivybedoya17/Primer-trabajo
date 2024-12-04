// Carreras y pilotos disponibles con cuotas
const carreras = {
    1: {
        nombre: "Carrera 1",
        pilotos: {
            A: 1.5,
            B: 2.3,
            C: 1.8
        }
    }
};

// Validar si el usuario es mayor de edad (ejemplo simple)
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// Selección de carrera
let carreraSeleccionada = prompt(
    "Seleccione una carrera disponible:\n1. Carrera 1"
);

if (!carreras[carreraSeleccionada]) {
    console.log("Error: Carrera no válida.");
} else {
    let carrera = carreras[carreraSeleccionada];

    // Mostrar pilotos disponibles
    let pilotos = Object.entries(carrera.pilotos)
        .map(([piloto, cuota]) => `${piloto} (${cuota})`)
        .join("\n");

    let tipoApuesta = prompt(
        "Seleccione el tipo de apuesta:\n1. Ganador de la carrera\n2. Posiciones exactas (1ro y 2do puesto)"
    );

    if (tipoApuesta === "1") {
        // Apuesta al ganador
        let piloto = prompt(`Seleccione el piloto ganador:\n${pilotos}`);

        if (!carrera.pilotos[piloto]) {
            console.log("Error: Piloto no válido.");
        } else {
            let monto = parseFloat(prompt("Ingrese el monto a apostar (mínimo $10000, máximo $1000000):"));

            if (isNaN(monto) || monto < 10000 || monto > 1000000) {
                console.log("Error: El monto debe estar entre $10000 y $1000000.");
            } else {
                let edad = parseInt(prompt("Ingrese su edad:"));

                if (!esMayorDeEdad(edad)) {
                    console.log("Error: Solo mayores de edad pueden apostar.");
                } else {
                    // Registro de apuesta
                    console.log(
                        `Apuesta registrada:\nCarrera: ${carrera.nombre}\nPiloto: ${piloto}\nMonto: $${monto}\n` +
                        `Cuota: ${carrera.pilotos[piloto]}`
                    );

                    // Simulación de resultado
                    let ganador = "A"; // Suponiendo que el piloto A ganó
                    if (piloto === ganador) {
                        let ganancias = monto * carrera.pilotos[piloto];
                        console.log(`¡Felicidades! Ganaste $${ganancias.toFixed(2)}.`);
                    } else {
                        console.log("Lo sentimos, no acertaste al ganador.");
                    }
                }
            }
        }
    } else if (tipoApuesta === "2") {
        // Apuesta a posiciones exactas
        let primero = prompt(`Seleccione el piloto en 1er lugar:\n${pilotos}`);
        let segundo = prompt(`Seleccione el piloto en 2do lugar:\n${pilotos}`);

        if (!carrera.pilotos[primero] || !carrera.pilotos[segundo]) {
            console.log("Error: Uno o ambos pilotos no son válidos.");
        } else {
            let monto = parseFloat(prompt("Ingrese el monto a apostar (mínimo $10000, máximo $1000000):"));

            if (isNaN(monto) || monto < 10000 || monto > 1000000) {
                console.log("Error: El monto debe estar entre $10000 y $1000000.");
            } else {
                let edad = parseInt(prompt("Ingrese su edad:"));

                if (!esMayorDeEdad(edad)) {
                    console.log("Error: Solo mayores de edad pueden apostar.");
                } else {
                    // Registro de apuesta
                    console.log(
                        `Apuesta registrada:\nCarrera: ${carrera.nombre}\n1er lugar: ${primero}\n2do lugar: ${segundo}\nMonto: $${monto}`
                    );

                    // Simulación de resultado
                    let resultado = { primero: "A", segundo: "B" }; // Suponiendo resultados
                    if (primero === resultado.primero && segundo === resultado.segundo) {
                        let ganancias = monto * (carrera.pilotos[primero] + carrera.pilotos[segundo]);
                        console.log(`¡Felicidades! Ganaste $${ganancias.toFixed(2)}.`);
                    } else {
                        console.log("Lo sentimos, no acertaste las posiciones exactas.");
                    }
                }
            }
        }
    } else {
        console.log("Error: Tipo de apuesta no válido.");
    }
}

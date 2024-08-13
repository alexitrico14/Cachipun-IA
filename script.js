let rondas = parseInt(prompt("¿Cuántas veces quieres jugar?"));

for (let i = 0; i < rondas; i++) {
    let user = prompt("Elige: piedra, papel o tijera").toLowerCase();

    let cpu;
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        cpu = "piedra";
    } else if (randomNumber === 1) {
        cpu = "papel";
    } else {
        cpu = "tijera";
    }

    let result;
    if (user === cpu) {
        result = "Empate";
    } else if ((user === "piedra" && cpu === "tijera") || (user === "papel" && cpu === "piedra") || (user === "tijera" && cpu === "papel")
    ) {
        result = "¡Ganaste!";
    } else {
        result = "Perdiste contra la máquina.";
    }

    alert(`Ronda ${i + 1}: Tú elegiste ${user}, la máquina eligió ${cpu}. ${result}`);
}

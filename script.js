document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const userChoiceText = document.querySelector("#user-choice span");
    const aiChoiceText = document.querySelector("#ai-choice span");
    const winnerText = document.querySelector("#winner");

    choices.forEach(button => {
        button.addEventListener("click", () => {
            // Quitar selección previa
            choices.forEach(btn => btn.classList.remove("selected"));
            
            // Marcar la opción seleccionada
            button.classList.add("selected");

            const userChoice = button.dataset.choice;
            const aiChoice = getAIChoice();

            // Mostrar la elección del usuario y un mensaje de carga
            userChoiceText.textContent = userChoice;
            aiChoiceText.innerHTML = '<span class="loading">🤔 Pensando...</span>';
            winnerText.textContent = "Analizando...";

            // Esperar antes de mostrar la elección de la IA y el resultado
            setTimeout(() => {
                aiChoiceText.textContent = aiChoice;
                const winner = getWinner(userChoice, aiChoice);
                winnerText.innerHTML = `<span class="win">${winner}</span>`;
            }, 1500);
        });
    });

    function getAIChoice() {
        const options = ["piedra", "papel", "tijera"];
        return options[Math.floor(Math.random() * options.length)];
    }

    function getWinner(user, ai) {
        if (user === ai) return "¡Empate!";
        if (
            (user === "piedra" && ai === "tijera") ||
            (user === "papel" && ai === "piedra") ||
            (user === "tijera" && ai === "papel")
        ) {
            return "¡Ganaste! 🎉";
        } else {
            return "La IA gana... 😔";
        }
    }
});

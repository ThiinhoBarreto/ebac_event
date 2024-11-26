// Data do evento (formato: "AAAA-MM-DDTHH:MM:SS")
const eventDate = new Date("2025-01-01T19:00:00").getTime(); 

function updateCountdown() {
    const now = new Date().getTime(); // Hora atual em milissegundos
    const diff = eventDate - now; // Diferença entre o evento e agora

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "O evento já começou!";
        clearInterval(timer); // Para o cronômetro
        return;
    }

    // Cálculo de dias, horas, minutos e segundos restantes
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Atualiza os valores no HTML
    document.getElementById("dia").textContent = days;
    document.getElementById("hora").textContent = hours;
    document.getElementById("minuto").textContent = minutes;
    document.getElementById("segundo").textContent = seconds;
}

// Atualiza o cronômetro a cada segundo
const timer = setInterval(updateCountdown, 1000);

// Inicializa o cronômetro
updateCountdown();

AOS.init();

// Data do evento (formato: "AAAA-MM-DDTHH:MM:SS")
const eventDate = new Date("2025-01-04T19:00:00").getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "O evento já começou!";
        document.getElementById("ctadown").innerHTML = "";
        var cta = document.getElementById("ctadown");
        cta.style.backgroundColor = "transparent";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("dia").textContent = days;
    document.getElementById("hora").textContent = hours;
    document.getElementById("minuto").textContent = minutes;
    document.getElementById("segundo").textContent = seconds;
}

const timer = setInterval(updateCountdown, 1000);

updateCountdown();

const IP_SERWERA = "mc.zajazdy.pl";
const API_TESTOWE = "mc.hypixel.net";

async function pobierzStatusSerwera() {
    const etykieta = document.getElementById('licznik-graczy');
    try {
        const odpowiedz = await fetch(`https://mcsrvstat.us{API_TESTOWE}`);
        const dane = await odpowiedz.json();
        
        if (dane.online === true) {
            etykieta.innerHTML = `Graczy online: <span class="font-black text-emerald-600">${dane.players.online}</span>`;
        } else {
            etykieta.innerHTML = `<span class="text-red-500 font-bold">Serwer jest offline</span>`;
        }
    } catch (error) {
        etykieta.innerText = "Graczy online: 0";
    }
}

document.getElementById('przycisk-graj').addEventListener('click', () => {
    navigator.clipboard.writeText(IP_SERWERA).then(() => {
        const alert = document.getElementById('alert-kopia');
        alert.classList.remove('opacity-0');
        setTimeout(() => alert.classList.add('opacity-0'), 3000);
    });
});

document.getElementById('przycisk-discord').addEventListener('click', () => {
    window.open('https://discord.gg', '_blank');
});

pobierzStatusSerwera();

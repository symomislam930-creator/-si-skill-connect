
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();

    if (tg.themeParams) {
        document.body.style.setProperty(
            "--tg-bg",
            tg.themeParams.bg_color || "#071321"
        );
    }
}

function showMessage(message) {
    if (tg && tg.showAlert) {
        tg.showAlert(message);
    } else {
        alert(message);
    }
}

function searchServices() {
    const input = document.getElementById("searchInput");
    const searchText = input.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".service-card");
    let found = 0;

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();

        if (name.includes(searchText)) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (found === 0) {
        showMessage("No matching services found!");
    }
}

document.getElementById("searchInput").addEventListener(
    "keydown",
    function(event) {
        if (event.key === "Enter") {
            searchServices();
        }
    }
);

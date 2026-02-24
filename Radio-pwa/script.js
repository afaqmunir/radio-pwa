var player = document.getElementById("player");

function playStation(url) {
    player.pause();      // Stop previous station
    player.src = url;    // Set new station
    player.load();
    player.play().catch(err => {
        alert("If it doesn’t play, make sure hosted on HTTPS (GitHub Pages).");
    });
}

function stopStation() {
    player.pause();
    player.src = "";
}
window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music && music.paused) {
        music.play();
    }
}, { once: true });

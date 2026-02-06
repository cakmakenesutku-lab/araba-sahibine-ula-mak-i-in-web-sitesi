window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(() => {
            // Tarayıcı otomatik çalmayı engellerse sessizce geç
        });
    }
});

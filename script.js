// Arka plan müziğini kullanıcı etkileşiminden sonra başlat
window.addEventListener(
  "click",
  () => {
    const music = document.getElementById("bgMusic");
    if (music && music.paused) {
      music
        .play()
        .catch(() => {
          // tarayıcı engellerse sessizce yoksay
        });
    }
  },
  { once: true }
);
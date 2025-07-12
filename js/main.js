document.addEventListener("DOMContentLoaded", () => {
  const linkProductos = document.getElementById("link-productos");
  const videoOverlay = document.getElementById("video-overlay");
  const video = document.getElementById("simulacion-video");

  if (!linkProductos || !videoOverlay || !video) {
    console.error("Uno o más elementos del DOM no se encontraron.");
    return;
  }

  linkProductos.addEventListener("click", function (event) {
    event.preventDefault(); // Previene la navegación normal
    videoOverlay.style.display = "flex"; // Muestra el video
    video.currentTime = 0;
    video.play();
  });

  // Redirigir al hacer clic en el video
  video.addEventListener("click", () => {
    window.location.href = "./pages/productos.html";
  });

  // Redirigir cuando el video termina
  video.addEventListener("ended", () => {
    window.location.href = "./pages/productos.html";
  });
});
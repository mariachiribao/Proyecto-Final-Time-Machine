document.addEventListener("DOMContentLoaded", () => {
  const linkProductos = document.getElementById("link-productos");
  const videoOverlay = document.getElementById("video-overlay");
  const video = document.getElementById("simulacion-video");

  if (!linkProductos || !videoOverlay || !video) {
    console.error("No se encontró uno de los elementos necesarios para el video.");
    return;
  }

  linkProductos.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que se cargue directamente la página
    videoOverlay.style.display = "flex"; // Muestra el video
    video.currentTime = 0;
    video.play();
  });

  video.addEventListener("click", () => {
    window.location.href = "./pages/productos.html";
  });

  video.addEventListener("ended", () => {
    window.location.href = "./pages/productos.html";
  });
});
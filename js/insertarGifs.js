document.addEventListener("DOMContentLoaded", function () {
  const parrafo = document.getElementById("parrafo-final");

  const contenedorGifs = document.createElement("div");
  contenedorGifs.className = "gif-container";

  // Crear el contenedor para el primer GIF con su leyenda
  const contenedorGif1 = document.createElement("div");
  const gif1 = document.createElement("img");
  gif1.src = "./assets/Multimedia/img/machinecel.gif";
  gif1.alt = "Semana 2";
  gif1.classList.add("gif-personalizado-1"); // Clase personalizada
  const leyenda1 = document.createElement("p");
  leyenda1.textContent = "Próximo Viaje Semana 2";
  contenedorGif1.appendChild(leyenda1);
  contenedorGif1.appendChild(gif1);

  // Crear el contenedor para el segundo GIF con su leyenda
  const contenedorGif2 = document.createElement("div");
  const gif2 = document.createElement("img");
  gif2.src = "./assets/Multimedia/img/machinepc.gif";
  gif2.alt = "Semana 3";
  gif2.classList.add("gif-personalizado-2"); // Clase personalizada
  const leyenda2 = document.createElement("p");
  leyenda2.textContent = "Próximo Viaje Semana 3";
  contenedorGif2.appendChild(leyenda2);
  contenedorGif2.appendChild(gif2);

  // Agregar ambos contenedores al contenedor principal
  contenedorGifs.appendChild(contenedorGif1);
  contenedorGifs.appendChild(contenedorGif2);

  // Insertar el contenedor de los GIFs después del párrafo
  parrafo.insertAdjacentElement("afterend", contenedorGifs);
});